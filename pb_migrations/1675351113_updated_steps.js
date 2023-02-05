migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("prpbacw2ivafp0m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "an2paeiz",
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
  const collection = dao.findCollectionByNameOrId("prpbacw2ivafp0m")

  // remove
  collection.schema.removeField("an2paeiz")

  return dao.saveCollection(collection)
})
