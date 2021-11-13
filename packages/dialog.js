const SERVER_EVENT = {
    DIALOG_RESPONSE: "server::onDialogResponse",
    REQUEST_DIALOG: "onRequestDialog"
}

const onDialogResponse = (dialogName, button, listSelected, textInput, passwordInput) => {
    // your code here
};

// Info Dialog
// 'infoDialog'

// // List Item Dialog
// 'listItem'

// // Listitem with info dialog
// 'listItemInfo'

// // Input Text Dialog
// 'inputText'

// // Input Password Dialog
// 'inputPassword'

// // Login & Register Dialog
// 'loginDialog'
// 'registerDialog'

mp.events.addCommand("dialog", (player, fullText, dialogType) => {

	player.call(SERVER_EVENT.REQUEST_DIALOG, [dialogType, 
        "test_dialog",
        "Caption",
        "informations",
        ["listitem1", "listitem2"],
        ["button1", "button2"],
    ]);
});

mp.events.add(SERVER_EVENT.DIALOG_RESPONSE, onDialogResponse)