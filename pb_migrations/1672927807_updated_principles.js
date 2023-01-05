migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njlhnvyv",
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
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // remove
  collection.schema.removeField("njlhnvyv")

  return dao.saveCollection(collection)
})
