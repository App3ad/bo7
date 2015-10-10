var moment = require('alloy/moment');

Alloy.Globals.pageStack.open($.index);

function transfomer(model) {
  var transform = model.toJSON();
  // Set the color of each bank
  try {
    transform.bankColor = Alloy.CFG.banks[transform.bankCode].color;
  } catch (ex) {
    Ti.API.error("Can't find color for bankCode: " + transform.bankCode);
  }

  // Set the color of the broduct
  try {
    transform.typeColor = Alloy.CFG.productType[transform.typeCode].color;
  } catch (ex) {
    Ti.API.error("Can't find color for typeCode: " + transform.typeCode);
  }

  // Calculate the time from now
  transform.time = moment(transform.lastPaymentDate).add(transform.periodNumber, transform.periodType).fromNow();

  // Get the period string, number + only 1st char in upper case
  transform.period = parseInt(transform.periodNumber) + transform.periodType.substr(0, 1).toUpperCase();

  if (transform.period === '1Y') {
    // If 1Y, replace with A for Annual payment
    transform.period = 'A';
  } else if (transform.period === '3M') {
    // If 3M, replace with Q for Quartarly payment
    transform.period = 'Q'; // Quartarly
  } else if (transform.period === '6M') {
    // If 6M, replace with 2Q for bi-Quartarly payment
    transform.period = '2Q'; // Quartarly
  }
  return transform;
}

function productListClicked(e) {
  // get the clicked item from that section
  var item = e.section.getItemAt(e.itemIndex);

  // clicked button
  Ti.API.debug(JSON.stringify(item));

  // Confirmation dialog
  var dialog = Ti.UI.createAlertDialog({
    title: 'Yah, Paied?',
    // Get the next payment time, double period from lastPaymentDate, since we still didn't update it
    message: 'Next payment: ' + moment(item.properties.lastPaymentDate).add(parseInt(item.properties.periodNumber) * 2, item.properties.periodType).fromNow(),
    cancel: 0,
    buttonNames: ['Not yet', 'Yes']
  });
  dialog.addEventListener('click', function(e) {
    if (e.index === e.cancel) {
      return;
    }

    // Get the model
    var myModel = Alloy.createModel('product');
    myModel.fetch({
      id: item.properties.myId
    });

    // Set last payment date
    myModel.set({
      lastPaymentDate: moment(item.properties.lastPaymentDate).add(item.properties.periodNumber, item.properties.periodType).toISOString()
    });

    myModel.save();

    // Update the UICollactionView
    Alloy.Collections.product.fetch();
  });
  dialog.show();
}

$.list.addEventListener("contextMenuClick", function(e) {

  switch (e.index) {
    case 1:
      // Confirmation dialog
      var dialog = Ti.UI.createAlertDialog({
        title: 'Sure?',
        message: 'Are you sure to delete this product?',
        cancel: 0,
        buttonNames: ['No', 'Yes']
      });
      dialog.addEventListener('click', function(e) {
        if (e.index === e.cancel) {
          return;
        }

        Alloy.Collections.product.at(e.itemIndex).destroy();
      });
      dialog.show();
      break;
    default:
    case 1:
      alert("Edit CollectionView item " + e.itemIndex);
      break;
  }
});

// Load the data into the collection, collection will bind the data into the UICollactionView automaticly
Alloy.Collections.product.fetch();
