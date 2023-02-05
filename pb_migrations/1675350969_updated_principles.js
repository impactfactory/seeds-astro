migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k21rmmun",
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
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // remove
  collection.schema.removeField("k21rmmun")

  return dao.saveCollection(collection)
})
