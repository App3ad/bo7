exports.definition = {
  config: {
    columns: {
      "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
      "title": "TEXT",
      "type": "TEXT",
      "bankCode": "TEXT",
      "periodNumber": "TEXT",
      "periodType": "TEXT",
      "createdDate": "TEXT",
      "EndDate": "TEXT",
      "lastPaymentDate": "TEXT"
    },
    adapter: {
      type: "sql",
      idAttribute: 'id',
      collection_name: "product"
    }
  }
};
