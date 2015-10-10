
// Set the success callback
$.PassCodeWidget.setOnSuccess(function() {
  Alloy.Globals.pageStack.open(Alloy.createController('home').getView());
});

Alloy.Globals.pageStack.open($.index);
