# TagBot-POC

Proof of concept chatbot with the goal to prompt users to tag their SharePoint documents.
The data presented is mock data.

Technologies used:

* LUIS
* Microsoft Bot Framework
* NodeJS
* Typescript
* Bot Framework Emulator

## Develop

1.  Enter `tsc -w` in a command prompt to automatically have typescript compiled into javascript.
2.  Edit the source files found in ./src.
3.  Create breakpoints in the typescript code and click debug in Visual Studio Code (Or any other editor of your preference).
4.  Open the bot framework emulator and insert the app id, secret and address to listen on. (Default 127.0.0.1:3950/api/messages)
5.  Run the bot with Debug or npm start.

## Deploy To Azure

1.  Open Visual Studio Code
2.  Install the "[Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice)" extension
3.  Open the "AZURE APP SERVICE" explorer window
4.  Log in (skip this step if logged in) with the command > "Azure: Sign In"
5.  Your subscriptions should appear in the explorer window
6.  Click the arrow-up: "Deploy to Web App"
7.  Follow the deploy steps

### Azure Deploy settings

The following environment variable rules:

* PORT= UNSET
* NODE_ENV=production
* SETTINGS_STORE= (point to correct store api)

These can be permanently set by opening your "Application Settings" under your Web App in the AZURE APP SERVICE explorer. Right-mouse click: "Add new setting" to remember this.
