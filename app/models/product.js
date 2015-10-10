exports.definition = {
  config: {
    columns: {
      "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
      "title": "TEXT",
      "typeCode": "TEXT",
      "bankCode": "TEXT",
      "periodNumber": "INTEGER",
      "periodType": "TEXT",
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
