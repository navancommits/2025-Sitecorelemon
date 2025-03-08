## Team name
⟹ Sitecorelemon

## Category
⟹ Sitecore Hackathon 2025 - Single Category

## Description
⟹ This is a Chrome plugin that can be useful to check if a Sitecore Item is present in XM Cloud preview and Experience edge endpoints - across different projects/environments, once configured. 

### XMC Item Finder Architecture Diagrams
![Chrome Plugin Entities](docs/diagram/chromeplugin.png)
![Manage Environment](docs/diagram/manageenv.png)
![Item Finder](docs/diagram/itemfinder.png)
![Overall Flow](docs/diagram/overallflow.png)

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
4. Azure Open AI Key
5. Azure Speech Key
6. Azure Open AI domain
7.
8.
9.
- Or other modules that must be installed
No installation is required apart from this plugin
- Or services that must be enabled/configured

_Remove this subsection if your entry does not have any prerequisites other than Sitecore_

## Installation instructions
⟹ Write a short clear step-wise instruction on how to install your module.  

> The installation is similar to how Chrome plugins are installed from the plugin store. The process is as follows:

a. Open the Chrome Web Store: Navigate to "chrome://webstore" in your Chrome browser. 
b. Search for the plugin: Use the search bar to type the name of the plugin you want to install. 
c. Select the plugin: Click on the desired plugin from the search results. 
d. Install the plugin: Click "Add to Chrome" on the plugin page. 


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

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](docs/images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://thiscatdoesnotexist.com/)

## Comments
If you'd like to make additional comments that is important for your module entry.
