migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxp00ofwon28fb8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lvyo97ua",
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
  const collection = dao.findCollectionByNameOrId("oxp00ofwon28fb8")

  // remove
  collection.schema.removeField("lvyo97ua")

  return dao.saveCollection(collection)
})
