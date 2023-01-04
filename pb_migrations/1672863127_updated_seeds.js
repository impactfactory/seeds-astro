migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // remove
  collection.schema.removeField("8xailltn")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xailltn",
    "name": "environments",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 9,
      "values": [
        "Balkon",
        "Garten",
        "Quartier",
        "Stadt",
        "Bauernhof",
        "Wildnis",
        "Fluss",
        "See",
        "Ozean"
      ]
    }
  }))

  // remove
  collection.schema.removeField("j1vpitcl")

  return dao.saveCollection(collection)
})
