
// Fetch and display value for selected key
function fetchValue() {
  let dropdown = document.getElementById("key-dropdown");
  let key = dropdown.value;
  let value = localStorage.getItem(key);

  document.getElementById("storageValue").innerText = key ? `Value: ${value}` : "";
}

function getValue(index)  {
	let dropdown = document.getElementById("key-dropdown");
	let key = dropdown.value;
	let value = localStorage.getItem(key);
	
	return value.split(",")[index];
}

async function fetchSitecoreData(graphqlQuery, variables) {
    const endpoint = "https://edge.sitecorecloud.io/api/graphql/v1"; // Sitecore Experience Edge endpoint
    const apiKey = getValue(2);

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "sc_apikey": apiKey // Passing sc_apikey as part of the request header
        },
        body: JSON.stringify({ query: graphqlQuery, variables })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
}

async function fetchPreviewData(graphqlQuery, variables) {
    const apiKey = getValue(1);
	const endpoint = getValue(0) + "/sitecore/api/graph/edge?sc_apikey=" + apiKey; // Preview endpoint

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
			"Content-Type": "application/json",	
            "sc_apikey": apiKey // Passing sc_apikey as part of the request header
        },
        body: JSON.stringify({ query: graphqlQuery, variables })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
}

async function getAzureChatCompletion(userContent) {
    const deploymentName = getValue(4); // Replace with your Azure AI deployment name
    const endpoint = getValue(3); // Replace with your Azure AI endpoint URL
    const apiKey = getValue(5); // Replace with your Azure API key

    const url = `${endpoint}/openai/deployments/${deploymentName}/chat/completions?api-version=2024-08-01-preview`;//could pass this from settings
    
    const requestBody = {
        messages: [
            { role: "system", content: "You are a Sitecore XM Cloud AI assistant." },
            { role: "user", content: userContent }
        ],
        max_tokens: 1000
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": apiKey
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        synthesizeSpeech(data.choices[0].message.content);
    } catch (error) {
        console.error("Error fetching chat completion:", error);
    }
}

 async function synthesizeSpeech(text) {
	const SpeechSDK = window.SpeechSDK;
	const speechKey = getValue(6);  // Replace with your key
	const serviceRegion = getValue(7);  // Replace with your region
	
	const speechConfig = window.SpeechSDK.SpeechConfig.fromSubscription(speechKey, serviceRegion);
	speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural"; // You can change the voice

	const audioConfig = window.SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
	const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

	synthesizer.speakTextAsync(
		text,
		result => {
			if (result.reason === window.SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
				console.log("Speech synthesized successfully.");
			} else {
				console.error("Speech synthesis failed:", result.errorDetails);
			}
			synthesizer.close();
		},
		error => {
			console.error("Error:", error);
			synthesizer.close();
		}
	);
}

document.getElementById("idOrPath").addEventListener("click", () => {
    languageCode.classList.add('disabled');
    idOrPath.classList.add('disabled');
    const userQuery = "How can you find Sitecore Item id or Sitecore Item Path from the content tree?";
				getAzureChatCompletion(userQuery).then(response => {
					synthesizeSpeech(response);                    
				});
    
     setTimeout(() => {
        // Re-enable after the event is finished
        languageCode.classList.remove('disabled');
        idOrPath.classList.remove('disabled');
    }, 60000); // Adjust the timeout based on your needs
    
});

document.getElementById("languageCode").addEventListener("click", () => {
    languageCode.classList.add('disabled');
    idOrPath.classList.add('disabled');
    const userQuery = "Why is language important while looking for an item in Sitecore experience edge?";
				getAzureChatCompletion(userQuery).then(response => {
					synthesizeSpeech(response);                    
				});
    
     setTimeout(() => {
        // Re-enable after the event is finished
        languageCode.classList.remove('disabled');
        idOrPath.classList.remove('disabled');
    }, 60000); // Adjust the timeout based on your needs
});

document.getElementById("sendRequest").addEventListener("click", () => {
    const path = document.getElementById("pathInput").value.trim();
    const language = document.getElementById("language").value.trim();
    let dropdown = document.getElementById("key-dropdown");
	
	if (!path || !language || !dropdown.value) return;
    
     // Show the spinner without causing reflow by changing opacity instead of display
    const spinner = document.getElementById("spinner");
    spinner.style.opacity = "1";  // Make spinner visible
    spinner.style.visibility = "visible";  // Ensure spinner is visible in the flow

    // Change form background to gray smoothly
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.style.transition = "background-color 0.5s ease";  // Smooth transition for background color
    chatContainer.style.backgroundColor = "#E8E9EB";  // Set blue background color
	
	const colorLbl = document.getElementById("colorLabel");
	const colorLbl2 = document.getElementById("colorLabel2");
	
	const trafficColors = {
	  red: "#D93025",
	  green: "#1E8E3E"
	};

    const query = `
        query GetItem($path: String!, $language: String!) {
            item(path: $path, language: $language) {
                id
                name
            }
        }
    `;
    
    const variables = {
        path: path,
        language: language
    };	

    fetchSitecoreData(query, variables)
        .then(data => { 
			// Hide the spinner once the response is received
            spinner.style.opacity = "0";  // Fade out spinner
            spinner.style.visibility = "hidden";  // Hide spinner from flow

            // Reset form background color after processing
            chatContainer.style.backgroundColor = "white";  // Reset to white background
						
            if (data.item != null) {       		
				colorLbl.style.backgroundColor = trafficColors.green;
            } else {                
				colorLbl.style.backgroundColor = trafficColors.red;
				
				const userQuery = 'why is my sitecore item not found in experience edge?';
				getAzureChatCompletion(userQuery).then(response => {
					synthesizeSpeech(response);
				});
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            // Hide the spinner if there's an error
            spinner.style.opacity = "0";  // Fade out spinner
            spinner.style.visibility = "hidden";  // Hide spinner from flow
            
            // Reset form background color after processing
            chatContainer.style.backgroundColor = "white";  // Reset to white background  
            
			colorLbl.style.backgroundColor = trafficColors.red;
        });
	
	fetchPreviewData(query, variables)
        .then(data => {
			// Hide the spinner once the response is received
            spinner.style.opacity = "0";  // Fade out spinner
            spinner.style.visibility = "hidden";  // Hide spinner from flow

            // Reset form background color after processing
            chatContainer.style.backgroundColor = "white";  // Reset to white background
			
            if (data.item != null) {
				colorLbl2.style.backgroundColor = trafficColors.green;
            } else {       
				colorLbl2.style.backgroundColor = trafficColors.red;
            }
        })
        .catch(error => {
            // Hide the spinner if there's an error
            spinner.style.opacity = "0";  // Fade out spinner
            spinner.style.visibility = "hidden";  // Hide spinner from flow
            
            // Reset form background color after processing
            chatContainer.style.backgroundColor = "white";  // Reset to white background 
        	colorLbl2.style.backgroundColor = trafficColors.red; //"#FF8488";
        });
});





