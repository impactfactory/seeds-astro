migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z19snvbs21jf9py")

  // remove
  collection.schema.removeField("6i9uly5o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzz55f0b",
    "name": "code",
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
  const collection = dao.findCollectionByNameOrId("z19snvbs21jf9py")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6i9uly5o",
    "name": "en",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzz55f0b",
    "name": "de",
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
})
