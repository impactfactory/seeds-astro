migrate((db) => {
  const collection = new Collection({
    "id": "omw9wr7fmv4igh4",
    "created": "2023-01-08 17:19:59.048Z",
    "updated": "2023-01-08 17:19:59.048Z",
    "name": "substeps",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9cugxyz1",
        "name": "desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("omw9wr7fmv4igh4");

  return dao.deleteCollection(collection);
})
