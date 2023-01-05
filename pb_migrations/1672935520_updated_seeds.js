migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbhrhwov",
    "name": "plants",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "4fqh4j6ek9z4ez9",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5bggskps",
    "name": "animals",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "ll0a1l8muzv0d94",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // remove
  collection.schema.removeField("vbhrhwov")

  // remove
  collection.schema.removeField("5bggskps")

  return dao.saveCollection(collection)
})
