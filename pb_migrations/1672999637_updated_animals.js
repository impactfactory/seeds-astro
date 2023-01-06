migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjkum9hx",
    "name": "translate",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94")

  // remove
  collection.schema.removeField("zjkum9hx")

  return dao.saveCollection(collection)
})
