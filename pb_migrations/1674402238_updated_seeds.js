migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chyho0s8",
    "name": "videos",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "oxp00ofwon28fb8",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // remove
  collection.schema.removeField("chyho0s8")

  return dao.saveCollection(collection)
})
