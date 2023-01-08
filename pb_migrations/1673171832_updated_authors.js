migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pos66gba",
    "name": "published",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pos66gba",
    "name": "published",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
