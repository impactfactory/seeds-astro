migrate((db) => {
  const collection = new Collection({
    "id": "z19snvbs21jf9py",
    "created": "2023-01-27 18:52:03.275Z",
    "updated": "2023-01-27 18:52:03.275Z",
    "name": "translations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nwf95npf",
        "name": "key",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uzz55f0b",
        "name": "de",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6i9uly5o",
        "name": "en",
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
  const collection = dao.findCollectionByNameOrId("z19snvbs21jf9py");

  return dao.deleteCollection(collection);
})
