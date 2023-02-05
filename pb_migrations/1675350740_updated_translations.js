migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z19snvbs21jf9py")

  collection.name = "languages"

  // remove
  collection.schema.removeField("nwf95npf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z19snvbs21jf9py")

  collection.name = "translations"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwf95npf",
    "name": "key",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
