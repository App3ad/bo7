var moment = require('alloy/moment');

Alloy.Globals.pageStack.open($.index);

function transfomer(model) {
  var transform = model.toJSON();
  transform.bankColor = Alloy.CFG.banks[transform.bankCode].color;
  transform.typeColor = Alloy.CFG.productType[transform.typeCode].color;
  transform.time = moment(transform.lastPaymentDate).add(transform.periodNumber, transform.periodType).fromNow();
  transform.period = parseInt(transform.periodNumber) + transform.periodType.substr(0,1).toUpperCase();
  if (transform.period === '1Y') {
    transform.period = 'A'; // Anual
  } else if (transform.period === '3M') {
    transform.period = 'Q'; // Quartarly
  } else if (transform.period === '6M') {
    transform.period = '2Q'; // Quartarly
  }
  return transform;
}

Alloy.Collections.product.fetch();
