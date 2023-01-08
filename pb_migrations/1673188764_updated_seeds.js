migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ioshtdbi",
    "name": "gallery",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif"
      ],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ys6emm5x",
    "name": "steps",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // remove
  collection.schema.removeField("ioshtdbi")

  // remove
  collection.schema.removeField("ys6emm5x")

  return dao.saveCollection(collection)
})
