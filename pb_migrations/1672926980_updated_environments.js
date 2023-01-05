migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwybt5cc",
    "name": "slug",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  // remove
  collection.schema.removeField("lwybt5cc")

  return dao.saveCollection(collection)
})
