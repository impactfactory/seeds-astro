migrate((db) => {
  const collection = new Collection({
    "id": "m64eka0gxn5eoub",
    "created": "2023-01-22 14:58:35.287Z",
    "updated": "2023-01-22 14:58:35.287Z",
    "name": "links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jr7j2ayb",
        "name": "published",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "flr5tnvb",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 5,
          "values": [
            "book",
            "film",
            "podcast",
            "video",
            "article"
          ]
        }
      },
      {
        "system": false,
        "id": "pellbd5n",
        "name": "url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "7h6tithk",
        "name": "name",
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
    "listRule": "published = true",
    "viewRule": "published = true",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub");

  return dao.deleteCollection(collection);
})
