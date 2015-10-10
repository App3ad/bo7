var args = arguments[0] || {};

function saveBtnClicked() {
  var myModel = Alloy.createModel('product', {
    "title": $.title.value,
    "typeCode": $.typeCode.value,
    "bankCode": $.bankCode.value,
    "periodNumber": $.periodNumber.value,
    "periodType": $.periodType.value,
    "EndDate": Alloy.Globals.moment($.EndDate.value).toISOString(),
    "lastPaymentDate": Alloy.Globals.moment($.lastPaymentDate.value).toISOString()
  });
  myModel.save();
  Alloy.Collections.product.fetch();
  Alloy.Globals.pageStack.back();
}

// Focus on 1st input
function windowOpened() {
  $.title.focus();
}
