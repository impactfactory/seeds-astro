migrate((db) => {
  const collection = new Collection({
    "id": "p8dytfw97kuzboc",
    "created": "2023-01-04 15:04:07.739Z",
    "updated": "2023-01-04 15:04:07.739Z",
    "name": "principles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "toq4q4re",
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
        "id": "3xfkibzl",
        "name": "short_desc",
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
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc");

  return dao.deleteCollection(collection);
})
