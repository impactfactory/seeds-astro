migrate((db) => {
  const collection = new Collection({
    "id": "ll0a1l8muzv0d94",
    "created": "2023-01-05 15:23:58.144Z",
    "updated": "2023-01-05 15:23:58.144Z",
    "name": "animals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qnprxp1r",
        "name": "published",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "3oqftw6f",
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
        "id": "ozeubakf",
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
        "id": "wdpru7ec",
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
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94");

  return dao.deleteCollection(collection);
})
