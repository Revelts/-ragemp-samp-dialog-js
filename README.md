# SA:MP Dialog for RAGE:MP
SA:MP Dialog for RAGE:MP on JS Language

## Getting Started

### 1.Dialog Type

* 'infoDialog'
* 'listItem'
* 'listItemInfo'
* 'inputText'
* 'inputPassword'
* 'loginDialog'
* 'registerDialog'

### 2. Client Event

```c 
mp.events.add("client:onDialogResponse", function (String dialogName, Number button, Number listSelected, String textInput, String passwordInput))
```
```c 
mp.events.add("onRequestDialog", function (String type, String dialogName, String dialogCaption, String dialogInfo, String Array dialogListItem, String Array dialogButton))
```

### 3. Server Event

```c 
mp.events.add("server:onDialogResponse", function (String dialogName, Number button, Number listSelected, String textInput, String passwordInput))
```

```c 
player.call("onRequestDialog", function (String dialogName, String Array button, String Array listSelected, String textInput, String passwordInput))
```

### 4.Installation
1. Drag and drop into your RAGE:MP Folder

### 5. Credits
1. Adri1 C# SA:MP Dialog for RAGE:MP (https://rage.mp/files/file/167-samp-dialogs/)
