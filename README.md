## Team name
⟹ Sitecorelemon

## Category
⟹ Sitecore Hackathon 2025 - Single Category

## Description
⟹ This is a Chrome plugin that can be useful to check if a Sitecore Item is present in XM Cloud preview and Experience edge endpoints - across different projects/environments, once configured. 

### XMC Item Finder Architecture Diagrams
![Chrome Plugin Entities](docs/diagrams/chromepluginentities.png)
![Manage Environment](docs/diagrams/manageenv.png)
![Item Finder](docs/diagrams/Itemfinder.png)
![Overall Flow](docs/diagrams/overallflow.png)

  - Module Purpose

    Many times, when content authors and testers are working in higher environments, there is constant confusion if an item exists in Experience edge in a specific environment and there would be a dependency on the technical team to switch between environments or run CLI push/deployment/package install and check for item(s). This plugin negates such a dependency or ball-passing. This plugin also negates the need to run graphql queries by non-technical users like Content authors and testers. 
  - What problem was solved (if any)
    - How does this module solve it

    The module provides a single place to quickly check for items across environments. Content authors and testers will benefit from this plugin since publishing is their bread and butter. Since Content authors and testers will have access to the Sitecore content editor, they have access to the Sitecore item id and path. Also, experience edge doesn't have any graphical UI apart from the actual application front-end. So, this tool can provide a leaner interface to check the status of the item publish and take necessary further steps. 

_You can alternately paste a [link here](#docs) to a document within this repo containing the description._

## Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

⟹ [Replace this Video link](#video-link)

## Pre-requisites and Dependencies

⟹ Does your module rely on other Sitecore modules or frameworks?

- List any dependencies
1. Sitecore XM Cloud Experience Edge key
2. Sitecore Security API Key
3. Environment domain in url

Optional:

4. Azure resource region (how-to given in below section)
5. Azure Speech Key (how-to given in below section)
6. Azure Open AI domain (how-to given in below section)
7. Azure Open AI Key (how-to given in below section)
8.
9.
- Or other modules that must be installed

No installation is required apart from this plugin
- Or services that must be enabled/configured

Although optional, if you want to utilise Azure-related AI functionilty, 
For Speech, follow this:
1. An Azure subscription. You can create one for free.
2. Create an AI Services resource for Speech in the Azure portal.
3. Get the Speech resource key and region. After your Speech resource is deployed, select Go to resource to view and manage keys.

For deploying an Azure AI chatGPT model follow these steps:
1. Sign in to Azure Portal: Go to the Azure portal and sign in with your Microsoft account. 
2. Create an Azure OpenAI resource:
3. Navigate to "Cognitive Services" or search for "Azure OpenAI". 
4. Click "Create" and provide necessary details like subscription, resource group, and region. 
5. Access Azure AI Foundry portal:
6. Once the resource is created, go to the "Azure AI Foundry" portal. 
7. Select a model to deploy: In the left sidebar, go to "Deployments". 
8. Click "Create new deployment". 
9. Choose a model from the available options, like "GPT-3.5 Turbo". 
10. Configure deployment settings: Provide a unique deployment name. 
11. Select the deployment type (Standard, Global Standard, etc.). 
12. Set the "Tokens per Minute Rate Limit" if needed. 
13. Deploy the model: Click "Deploy" to initiate the deployment process. 

## Installation instructions
⟹ Write a short clear step-wise instruction on how to install your module.  

> The installation is similar to how Chrome plugins are installed from the plugin store. The process is as follows:

1. Open the Chrome Web Store: Navigate to "chrome://webstore" in your Chrome browser. 
2. Search for the plugin: Use the search bar to type the name of the plugin you want to install. 
3. Select the plugin: Click on the desired plugin from the search results. 
4. Install the plugin: Click "Add to Chrome" on the plugin page. 


 The chrome plugin will be available only after review since it was submitted as part of the hackathon. So, until then follow this interim process to install the plugin manually:

1. Unzip the file named - 
2. Download the plugin: Obtain the zip file containing the Chrome plugin you want to install. 
3. Extract the zip: Unzip the downloaded file to access the plugin folder. 
4. Access Chrome extensions page: Go to "chrome://extensions" in your Chrome browser. 
5. Enable Developer mode: Toggle the "Developer mode" switch in the top right corner. 
6. Load unpacked: Click "Load unpacked". 
7. Select the folder: Navigate to the extracted plugin folder and select it to install. 
8. 

### Configuration
⟹ If there are any custom configuration that has to be set manually then remember to add all details here.

_Remove this subsection if your entry does not require any configuration that is not fully covered in the installation instructions already_

## Usage instructions
⟹ Provide documentation about your module, how do the users use your module, where are things located, what do the icons mean, are there any secret shortcuts etc.

Include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

## Comments
If you'd like to make additional comments that is important for your module entry.
