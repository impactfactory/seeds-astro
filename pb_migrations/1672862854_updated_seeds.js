migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xailltn",
    "name": "environment",
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

  return dao.saveCollection(collection)
})
