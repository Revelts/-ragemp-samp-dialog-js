class Dialog {
    constructor(dialogName, dialogCaption, dialogInfo, dialogButtons, dialogListItem = null, dialogInput = null, dialogPasswordInput = null) {
      
      if(this.windowDialog != null && mp.browsers.exists(this.windowDialog)) {
        this.windowDialog.destroy();
        this.windowDialog = null;
      }
  
      this.windowDialog = mp.browsers.new("package://CEF/dialog/index.html");
      this.windowDialog.active = true;
  
      this.dialogName = dialogName;
      this.dialogCaption = dialogCaption;
      this.dialogInfo = dialogInfo;
      this.dialogInput = dialogInput;
      this.dialogPasswordInput = dialogPasswordInput;
      this.dialogButtons = dialogButtons;
      this.dialogListItem = dialogListItem;
      this.create();
    }
  
    create() {    
      // Execute JS to create the dialog
      const object = {
        name: this.dialogName,
        caption: this.dialogCaption,
        info: this.dialogInfo,
        buttons: this.dialogButtons,
        list_items: this.dialogListItem,
        text_input: this.dialogInput,
        password_input: this.dialogPasswordInput
      }
      mp.gui.chat.push(JSON.stringify(object));
      this.windowDialog.execute(`createDialog(\`${JSON.stringify(object)}\`);`);
      mp.gui.cursor.visible = true;
    }
  
    destroy() {
      // Dialog validation to destroy
      if(this.windowDialog != null && mp.browsers.exists(this.windowDialog)) {
        this.windowDialog.destroy();
        this.windowDialog = null;
        mp.gui.cursor.visible = false;
      }
    }
  }
  
  export { Dialog }