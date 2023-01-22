migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znm2itq8",
    "name": "source",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // remove
  collection.schema.removeField("znm2itq8")

  return dao.saveCollection(collection)
})
