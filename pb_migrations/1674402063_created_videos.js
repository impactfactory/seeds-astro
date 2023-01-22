migrate((db) => {
  const collection = new Collection({
    "id": "oxp00ofwon28fb8",
    "created": "2023-01-22 15:41:03.057Z",
    "updated": "2023-01-22 15:41:03.057Z",
    "name": "videos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "idwferaa",
        "name": "published",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "waf8yuqe",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "youtube",
            "vimeo",
            "archive"
          ]
        }
      },
      {
        "system": false,
        "id": "sionb7gk",
        "name": "v_id",
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
        "id": "td1wzhb2",
        "name": "name",
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
        "id": "yu58fqg6",
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
  const collection = dao.findCollectionByNameOrId("oxp00ofwon28fb8");

  return dao.deleteCollection(collection);
})
