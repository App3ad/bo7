// Supervisors
var preload_data = [{
  bankCode: "ADCB",
  periodType: "days",
  periodNumber: 40,
  EndDate: "2017-05-10T08:18:20.692Z",
  lastPaymentDate: "2015-09-29T08:18:20.692Z",
  title: "#6547",
  typeCode: "CC"
}, {
  bankCode: "DIB",
  periodType: "months",
  periodNumber: 6,
  EndDate: "2019-10-09T08:18:20.692Z",
  lastPaymentDate: "2015-07-09T08:18:20.692Z",
  title: "Car",
  typeCode: "LO"
}, {
  bankCode: "NBD",
  periodType: "years",
  periodNumber: 1,
  EndDate: "2019-10-09T08:18:20.692Z",
  lastPaymentDate: "2014-12-09T08:18:20.692Z",
  title: "Home",
  typeCode: "MO"
}, {
  bankCode: "DIB",
  periodType: "days",
  periodNumber: 10,
  EndDate: "2019-10-09T08:18:20.692Z",
  lastPaymentDate: "2015-09-12T08:18:20.692Z",
  title: "#8764",
  typeCode: "CC"
}, {
  bankCode: "NBD",
  periodType: "years",
  periodNumber: 1,
  EndDate: "2019-10-09T08:18:20.692Z",
  lastPaymentDate: "2015-10-09T08:18:20.692Z",
  title: "University",
  typeCode: "MO"
}, {
  bankCode: "FGB",
  periodType: "days",
  periodNumber: 55,
  EndDate: "2019-10-09T08:18:20.692Z",
  lastPaymentDate: "2015-10-09T08:18:20.692Z",
  title: "#1928",
  typeCode: "CC"
}, {
  bankCode: "FGB",
  periodType: "months",
  periodNumber: 3,
  EndDate: "2019-10-09T08:18:20.692Z",
  lastPaymentDate: "2015-10-09T08:18:20.692Z",
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
