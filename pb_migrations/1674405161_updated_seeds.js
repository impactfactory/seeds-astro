migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g1afumyd",
    "name": "links",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "m64eka0gxn5eoub",
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
    "id": "g1afumyd",
    "name": "link",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "m64eka0gxn5eoub",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
