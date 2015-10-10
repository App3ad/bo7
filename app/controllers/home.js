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
  transform.time = Alloy.Globals.moment(transform.lastPaymentDate).add(transform.periodNumber, transform.periodType).fromNow();

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

function addBtnClicked() {
  Alloy.Globals.pageStack.open(Alloy.createController('form').getView());
}

function logoutBtnClicked() {

  // Confirmation dialog
  var dialog = Ti.UI.createAlertDialog({
    title: 'Sure?',
    cancel: 0,
    buttonNames: ['No', 'Yes']
  });
  dialog.addEventListener('click', function(e) {
    if (e.cancel !== e.index) {
      Alloy.Globals.pageStack.back();
    }
  });
  dialog.show();
}

function productListClicked(eList) {
  // get the clicked item from that section
  var item = eList.section.getItemAt(eList.itemIndex);

  // clicked button
  Ti.API.debug(JSON.stringify(item));

  var options = Ti.UI.createOptionDialog({
    cancel: 3,
    destructive: 2,
    title: "App Options",
    options: ['Paid', 'Edit', 'Delete', 'Cancel'],
  });

  options.addEventListener('click', function(e) {
    switch (e.index) {
      case 0:
        // Get the model
        var myModel = Alloy.createModel('product');
        myModel.fetch({
          id: item.properties.myId
        });

        // Set last payment date
        myModel.set({
          lastPaymentDate: Alloy.Globals.moment(item.properties.lastPaymentDate).add(item.properties.periodNumber, item.properties.periodType).toISOString()
        });

        myModel.save();

        // Update the UICollactionView
        Alloy.Collections.product.fetch();
        break;
      case 1:
        alert('Sooon');
        break;
      case 2:

        // Confirmation dialog
        var dialog = Ti.UI.createAlertDialog({
          title: 'Sure?',
          message: 'Are you sure to delete this product?',
          cancel: 0,
          buttonNames: ['No', 'Yes']
        });
        dialog.addEventListener('click', function() {
          if (e.cancel === e.index) {
            return;
          }
          Alloy.Collections.product.at(eList.itemIndex).destroy();
        });
        dialog.show();
        break;

    }
  });
  options.show();
}

// Load the data into the collection, collection will bind the data into the UICollactionView automaticly
Alloy.Collections.product.fetch();
