// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the dropdown with keys in localStorage
  updateDropdown();

  // Set up event listeners for tab navigation
  document.getElementById("retrieve-tab").addEventListener("click", function() {
    openTab('retrieve');
  });

  document.getElementById("manage-tab").addEventListener("click", function() {
    openTab('manage');
  });

  // Event listeners for buttons in the "Manage Storage" tab
  document.getElementById("save-btn").addEventListener("click", saveItem);
  document.getElementById("remove-btn").addEventListener("click", removeItem);
  document.getElementById("clear-btn").addEventListener("click", clearStorage);

  // Event listener for the key dropdown to fetch the selected key's value
  //document.getElementById("key-dropdown").addEventListener("change", fetchValue);
});

// Switch between tabs
function openTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  document.querySelector(`#${tabId}-tab`).classList.add("active");

  if (tabId === "retrieve") {
    updateDropdown();
  }
}

// Add key-value pair to localStorage
function saveItem() {
  let key = document.getElementById("key-input").value;
  
  let url = document.getElementById("url-input").value;
  let scapikey = document.getElementById("scapikey-input").value;
  let eekey = document.getElementById("eekey-input").value;
  let azureopenai = document.getElementById("azureopenai-input").value;
  let azureopenaidep = document.getElementById("azureopenaidep-input").value;
  let azureopenaikey = document.getElementById("azureopenaikey-input").value;
  let azurespeechkey = document.getElementById("azurespeechkey-input").value;
  let azureregion = document.getElementById("azureregion-input").value;
  
  let value=url + "," + scapikey  + "," + eekey + "," + azureopenai + "," + azureopenaidep + "," + azureopenaikey  + "," + azurespeechkey + "," + azureregion

  if (key && value) {
    localStorage.setItem(key, value);
    alert("Item stored successfully!");
    updateDropdown(); // Refresh dropdown in retrieve tab
  } else {
    alert("Please enter both key and value.");
  }
}

// Remove key-value pair from localStorage
function removeItem() {
  let key = document.getElementById("key-input").value;
  localStorage.removeItem(key);
  alert("Item removed!");
  updateDropdown(); // Refresh dropdown in retrieve tab
}

// Clear all data from localStorage
function clearStorage() {
  localStorage.clear();
  alert("All localStorage data cleared!");
  updateDropdown(); // Refresh dropdown in retrieve tab
}

// Update dropdown with keys from localStorage
function updateDropdown() {
  let dropdown = document.getElementById("key-dropdown");
  dropdown.innerHTML = '<option value="">-- Select an environment --</option>';

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    dropdown.appendChild(option);
  }
}

