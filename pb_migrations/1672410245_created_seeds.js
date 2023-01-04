migrate((db) => {
  const collection = new Collection({
    "id": "ityuw4q7kd5lj0s",
    "created": "2022-12-30 14:24:05.260Z",
    "updated": "2022-12-30 14:24:05.260Z",
    "name": "seeds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zbcugevc",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "grk9xb34",
        "name": "desc_short",
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
        "id": "bseciz7g",
        "name": "desc_long",
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
        "id": "ewodtvwm",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "action",
            "contribution",
            "donation",
            "media"
          ]
        }
      },
      {
        "system": false,
        "id": "8xailltn",
        "name": "environment",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 9,
          "values": [
            "Balkon",
            "Garten",
            "Quartier",
            "Stadt",
            "Bauernhof",
            "Wildnis",
            "Fluss",
            "See",
            "Ozean"
          ]
        }
      },
      {
        "system": false,
        "id": "rhrv5cmb",
        "name": "img",
        "type": "file",
        "required": true,
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
          "thumbs": [
            "100x100"
          ]
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
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s");

  return dao.deleteCollection(collection);
})
