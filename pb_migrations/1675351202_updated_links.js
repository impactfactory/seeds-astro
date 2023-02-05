migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhuer24e",
    "name": "languages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "z19snvbs21jf9py",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhuer24e",
    "name": "language",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "z19snvbs21jf9py",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
