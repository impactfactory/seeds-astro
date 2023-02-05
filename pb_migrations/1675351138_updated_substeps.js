migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omw9wr7fmv4igh4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iphpmgk5",
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
  const collection = dao.findCollectionByNameOrId("omw9wr7fmv4igh4")

  // remove
  collection.schema.removeField("iphpmgk5")

  return dao.saveCollection(collection)
})
