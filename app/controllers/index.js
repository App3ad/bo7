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

Alloy.Collections.product.fetch();
