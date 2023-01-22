migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flr5tnvb",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "article",
        "book",
        "example",
        "film",
        "podcast",
        "study",
        "video",
        "wikipedia"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m64eka0gxn5eoub")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flr5tnvb",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "article",
        "book",
        "example",
        "film",
        "podcast",
        "video",
        "wikipedia"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
