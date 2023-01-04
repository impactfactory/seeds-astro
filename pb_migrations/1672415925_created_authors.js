migrate((db) => {
  const collection = new Collection({
    "id": "jjjlksaws6jcg0c",
    "created": "2022-12-30 15:58:45.084Z",
    "updated": "2022-12-30 15:58:45.084Z",
    "name": "authors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "byetdstk",
        "name": "name",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c");

  return dao.deleteCollection(collection);
})
