migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rye8fo40",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // remove
  collection.schema.removeField("rye8fo40")

  return dao.saveCollection(collection)
})
