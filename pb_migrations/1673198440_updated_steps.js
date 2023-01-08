migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("prpbacw2ivafp0m")

  // remove
  collection.schema.removeField("tu5dfkw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7wsecdew",
    "name": "subs",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "omw9wr7fmv4igh4",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("prpbacw2ivafp0m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tu5dfkw1",
    "name": "substeps",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("7wsecdew")

  return dao.saveCollection(collection)
})
