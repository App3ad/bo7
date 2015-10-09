// Supervisors
var preload_data = [{
  bankCode: "ADCB",
  periodType: "days",
  periodNumber: 40,
  //createdDate: "Fri Oct 09 2015 10:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Jun 01 2014 10:08:03 GMT+0200 (EET)",
  title: "#6547",
  typeCode: "CC"
}, {
  bankCode: "DIB",
  periodType: "months",
  periodNumber: 6,
  //createdDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Dec 09 2013 21:08:03 GMT+0200 (EET)",
  title: "Car",
  typeCode: "LO"
}, {
  bankCode: "NBD",
  periodType: "years",
  periodNumber: 1,
  //createdDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "Home",
  typeCode: "MO"
}, {
  bankCode: "DIB",
  periodType: "days",
  periodNumber: 10,
  //createdDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "#8764",
  typeCode: "CC"
}, {
  bankCode: "NBD",
  periodType: "years",
  periodNumber: 1,
  //createdDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "University",
  typeCode: "MO"
}, {
  bankCode: "FGB",
  periodType: "days",
  periodNumber: 55,
  //createdDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "#1928",
  typeCode: "CC"
}, {
  bankCode: "FGB",
  periodType: "months",
  periodNumber: 3,
  //createdDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "2012 vacation",
  typeCode: "LO"
}];

migration.up = function(migrator) {
  migrator.createTable({
    "columns": {
      "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
      "title": "TEXT",
      "typeCode": "TEXT",
      "bankCode": "TEXT",
      "periodNumber": "TEXT",
      "periodType": "TEXT",
      "createdDate": "TEXT",
      "EndDate": "TEXT",
      "lastPaymentDate": "TEXT"
    }
  });
  var i = 0;
  for (i; i < preload_data.length; i += 1) {
    migrator.insertRow(preload_data[i]);
  }
};

migration.down = function(db) {

};
