migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v5v9tycr",
    "name": "language",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "z19snvbs21jf9py",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  // remove
  collection.schema.removeField("v5v9tycr")

  return dao.saveCollection(collection)
})
