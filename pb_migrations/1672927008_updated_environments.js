migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqo9cnc8",
    "name": "published",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  // remove
  collection.schema.removeField("hqo9cnc8")

  return dao.saveCollection(collection)
})
