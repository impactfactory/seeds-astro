migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dpaf0cev",
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
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9")

  // remove
  collection.schema.removeField("dpaf0cev")

  return dao.saveCollection(collection)
})
