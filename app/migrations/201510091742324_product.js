// Supervisors
var preload_data = [{
  bankCode: "ADCB",
  periodType: "days",
  periodNumber: 40,
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Sep 20 2019 21:08:03 GMT+0200 (EET)",
  title: "#6547",
  typeCode: "CC"
}, {
  bankCode: "DIB",
  periodType: "months",
  periodNumber: 6,
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Jun 09 2015 21:08:03 GMT+0200 (EET)",
  title: "Car",
  typeCode: "LO"
}, {
  bankCode: "NBD",
  periodType: "years",
  periodNumber: 1,
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Dec 09 2014 21:08:03 GMT+0200 (EET)",
  title: "Home",
  typeCode: "MO"
}, {
  bankCode: "DIB",
  periodType: "days",
  periodNumber: 10,
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Sep 29 2015 21:08:03 GMT+0200 (EET)",
  title: "#8764",
  typeCode: "CC"
}, {
  bankCode: "NBD",
  periodType: "years",
  periodNumber: 1,
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "University",
  typeCode: "MO"
}, {
  bankCode: "FGB",
  periodType: "days",
  periodNumber: 55,
  EndDate: "Fri Oct 09 2019 21:08:03 GMT+0200 (EET)",
  lastPaymentDate: "Fri Oct 09 2015 21:08:03 GMT+0200 (EET)",
  title: "#1928",
  typeCode: "CC"
}, {
  bankCode: "FGB",
  periodType: "months",
  periodNumber: 3,
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
