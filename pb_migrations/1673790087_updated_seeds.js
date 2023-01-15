migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j1vpitcl",
    "name": "environments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "89fuy9ud22beqs1",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j1vpitcl",
    "name": "environments",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "89fuy9ud22beqs1",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
