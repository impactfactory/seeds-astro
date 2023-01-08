migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // remove
  collection.schema.removeField("ys6emm5x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jdwce75u",
    "name": "steps",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "prpbacw2ivafp0m",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ys6emm5x",
    "name": "steps",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jdwce75u")

  return dao.saveCollection(collection)
})
