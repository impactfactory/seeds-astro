migrate((db) => {
  const collection = new Collection({
    "id": "70n77hy76dluftm",
    "created": "2023-01-22 15:09:43.616Z",
    "updated": "2023-01-22 15:09:43.616Z",
    "name": "tags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zhqqw1nw",
        "name": "published",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "byy9l4zr",
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
        "id": "qx85lggm",
        "name": "slug",
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
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm");

  return dao.deleteCollection(collection);
})
