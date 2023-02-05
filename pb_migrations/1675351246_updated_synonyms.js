migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nku8cme7",
    "name": "languages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "z19snvbs21jf9py",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm")

  // remove
  collection.schema.removeField("nku8cme7")

  return dao.saveCollection(collection)
})
