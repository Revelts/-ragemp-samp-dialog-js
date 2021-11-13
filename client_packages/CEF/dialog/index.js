let list_selected = 0,
	dialog_name = null;

function onListItemClick(item)
{
	if(list_selected != item)
	{
		document.getElementById("item" + list_selected).setAttribute("class", "");
		document.getElementById("item" + item).setAttribute("class", "selected");
		list_selected = item;
	}
};

function onButtonClick(button)
{
	if(dialog_name != null && dialog_name != "")
	{
		let inputtext_value = null,
			inputpassword_value = null;
		if(document.getElementById("text_input") != null) inputtext_value = document.getElementById("text_input").value;
		if(document.getElementById("password_input") != null) inputpassword_value = document.getElementById("password_input").value;
		mp.trigger("onDialogResponse", dialog_name, button, list_selected, inputtext_value, inputpassword_value);
	}
};

function createDialog(object)
{
	const obj = JSON.parse(object);
	console.log(obj);
	let name = obj.name;
	let caption = obj.caption;
	let info = obj.info;
	let buttons = obj.buttons;
	let list_items = obj.list_items;
	let text_input = obj.text_input;
	let password_input = obj.password_input;
	if(name != "")
	{
		dialog_name = name;
		list_selected = 0;

		let caption_str = "",
			info_str = "",
			list_items_str = "",
			inputs_str = "",
			buttons_str = "";

		if(caption != "") caption_str = "<div id='caption'>" + caption + "</div>";
		if(info != "") info_str = "<div id='body'>" + info + "</div>";
		if(list_items && list_items.length > 0)
		{
			list_items_str = "<div id='list'><ul>";
			for(i = 0; i < list_items.length; i++)
			{ 
				if(i == list_selected) list_items_str += "<li id='item" + i + "' class='selected' onclick='onListItemClick(" + i + ")'>" + list_items[i] + "</li>";
				else list_items_str += "<li id='item" + i + "' onclick='onListItemClick(" + i + ")'>" + list_items[i] + "</li>";
			}
			list_items_str += "</ul></div>";
		}
		if(text_input || password_input)
		{
			inputs_str = "<div id='input'>";
			if(text_input && text_input != "")
			{ 
				inputs_str += "<input id='text_input' type='text' placeholder='" + text_input + "'/>";
			}
			if(password_input && password_input != "")
			{ 
				inputs_str += "<input id='password_input' type='password' placeholder='" + password_input + "'/>";
			}
			inputs_str += "</div>";
		}
		if(buttons && buttons.length > 0)
		{
			buttons_str = "<div id='buttons'>";
			for(i = 0; i < buttons.length; i++)
			{ 
				buttons_str += "<button id='" + i + "' type='button' onclick='onButtonClick(" + i + ")'>" + buttons[i] + "</button>";
			}
			buttons_str += "</div>";
		}

		//ok
		document.getElementById("dialog").innerHTML = caption_str + info_str + list_items_str + inputs_str + buttons_str;
	}
};