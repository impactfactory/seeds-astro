migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "quhqa7p7",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xfkibzl",
    "name": "desc",
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
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  // remove
  collection.schema.removeField("quhqa7p7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xfkibzl",
    "name": "short_desc",
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
