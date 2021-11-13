import { Dialog } from "./dialogModel";

const CLIENT_EVENT = {
    REQUEST_DIALOG: "onRequestDialog",
    RESPONSE_DIALOG: "onDialogResponse",
    CALL_SERVER: "server::onDialogResponse",
    CALL_CLIENT: "client::onDialogResponse"
}

let dialogHandler = null;

const onRequestDialog = (type, dialogName, dialogCaption, dialogInfo, dialogListItem, dialogButton) => {
    // Info Dialog
    if(type === 'infoDialog') {
        dialogHandler = new Dialog(dialogName, dialogCaption, dialogInfo, dialogButton, null, null, null); 
        return;
    }
    // List Item Dialog
    if(type === 'listItem') {
        dialogHandler = new Dialog(dialogName, dialogCaption, null, dialogButton, dialogListItem, null, null); 
        return;
    }
    // Listitem with info dialog
    if(type === 'listItemInfo') {
        dialogHandler = new Dialog(dialogName, dialogCaption, dialogInfo, dialogButton, dialogListItem, null, null); 
        return;
    }
    // Input Text Dialog
    if(type === 'inputText') {
        dialogHandler = new Dialog(dialogName, dialogCaption, dialogInfo, dialogButton, null, " ", null); 
        return;
    }
    // Input Password Dialog
    if(type === 'inputPassword') {
        dialogHandler = new Dialog(dialogName, dialogCaption, dialogInfo, dialogButton, null, null, " "); 
        return;
    }
    // Login & Register Dialog
    if(type === 'loginDialog' || type === 'registerDialog') {
        dialogHandler = new Dialog(dialogName, dialogCaption, dialogInfo, dialogButton, null, "Name", "Password"); 
        return;
    }
};

const onDialogResponse = (dialogName, button, listSelected, textInput, passwordInput) => {
    //Debugger
    mp.gui.chat.push(`dialogName : ${dialogName}`);
    mp.gui.chat.push(`button : ${button}`);
    mp.gui.chat.push(`listSelected : ${listSelected}`);
    mp.gui.chat.push(`textInput : ${textInput}`);
    mp.gui.chat.push(`passwordInput : ${passwordInput}`);
    
    // Call Event.
    mp.events.callRemote(CLIENT_EVENT.CALL_SERVER, dialogName, button, listSelected, textInput, passwordInput);
    mp.events.call(CLIENT_EVENT.CALL_CLIENT, dialogName, button, listSelected, textInput, passwordInput);
    dialogHandler.destroy();
};

const clientOnDialogResponse = (dialogName, button, listSelected, textInput, passwordInput) => {
    // your code
};

mp.events.add(CLIENT_EVENT.CALL_CLIENT, clientOnDialogResponse);
mp.events.add(CLIENT_EVENT.REQUEST_DIALOG, onRequestDialog);
mp.events.add(CLIENT_EVENT.RESPONSE_DIALOG, onDialogResponse);