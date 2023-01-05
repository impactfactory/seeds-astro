migrate((db) => {
  const collection = new Collection({
    "id": "4fqh4j6ek9z4ez9",
    "created": "2023-01-05 15:20:12.704Z",
    "updated": "2023-01-05 15:20:12.704Z",
    "name": "plants",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gqv8ssvm",
        "name": "published",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "thkibbou",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "96nnalbc",
        "name": "slug",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "711s8s60",
        "name": "img",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9");

  return dao.deleteCollection(collection);
})
