migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94")

  // remove
  collection.schema.removeField("zjkum9hx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qdnjsxvq",
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
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjkum9hx",
    "name": "translate",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("qdnjsxvq")

  return dao.saveCollection(collection)
})
