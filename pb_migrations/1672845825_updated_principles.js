migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yth0dtqs",
    "name": "published",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // remove
  collection.schema.removeField("yth0dtqs")

  return dao.saveCollection(collection)
})
