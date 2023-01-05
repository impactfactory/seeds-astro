migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqv8ssvm",
    "name": "published",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqv8ssvm",
    "name": "published",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
