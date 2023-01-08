migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omw9wr7fmv4igh4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vpdxgmgb",
    "name": "published",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omw9wr7fmv4igh4")

  // remove
  collection.schema.removeField("vpdxgmgb")

  return dao.saveCollection(collection)
})
