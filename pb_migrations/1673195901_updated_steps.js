migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("prpbacw2ivafp0m")

  collection.listRule = "published = true"
  collection.viewRule = "published = true"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayxlo7o4",
    "name": "published",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("prpbacw2ivafp0m")

  collection.listRule = null
  collection.viewRule = null

  // remove
  collection.schema.removeField("ayxlo7o4")

  return dao.saveCollection(collection)
})
