# Ti.Passcode

### com.caffeinalab.titanium.passcode

Alloy Titanium widget for an **identical** iPhone lock screen with passcode.

![image](http://cl.ly/image/36262Q3v2X39/lalaal.gif)

## Installation

#### Via Gittio (Stable)

```
gittio install com.caffeinalab.titanium.passcode
```

#### Via Github

Download the latest release, and add in your config.json, under dependencies:

```json
"dependencies": {
    "com.caffeinalab.titanium.passcode": "*"
}
```

#### Usage in Alloy Views

```xml
<Widget id="PassCodeWidget" src="com.caffeinalab.titanium.passcode" code="42424" />
```

```javascript

// Set the success callback
$.PassCodeWidget.setOnSuccess(function() {
	alert("Yeah!")
});

$.PassCodeWidget.setOnError(function(times) {
	if (times > 4) {
		alert("Shame on you!");
	}
});
```

#### Usage in Controllers

```javascript

var $window = Ti.UI.createWindow({
	backgroundColor: '#0000'
});

var $pc = Alloy.createWidget('com.caffeinalab.titanium.passcode', { code: "1234" });

$pc.setOnSuccess(function() {
	$window.close();
	// Do the next private things
});

$pc.setOnError(function(times) {
	if (times > 4) {
		alert("Shame on you!");
	}
});

$window.add($pc.getView());
$window.open();
```

##### Prompt mode

You can use the widget to prompt the user for a new code. Just call:

`
$.PassCodeWidget.setPromptMode(5);
$.PassCodeWidget.setOnPromptSuccess(function(newCode) {
	console.log("The new code is" + newCode);
});
`

This ask to the user for a new code of `5` chars.

### API

#### `setCode(code: String)`

Set a new code

#### `setPromptMode(length: Number)`

Set the **prompt mode**, that doesn't check for a code but prompt the user to enter a code.

The `length` argument represents the code length.

#### `setOnSuccess(cb: Function)`

Define the callback to invoke when the user inserts the correct code.

#### `setOnError(cb: Function)`

Define the callback to invoke when the user inserts the wrong code.

The first argument of the `onError` callback represents the times that the user has typed the wrong code.

#### `setOnSuccessPrompt(cb: Function)`

Define the callback to invoke when at the end of the *prompt mode*.


