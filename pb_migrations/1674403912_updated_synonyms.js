migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "byy9l4zr",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "byy9l4zr",
    "name": "label",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
