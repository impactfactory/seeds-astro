migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qgbfyh8p",
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
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c")

  // remove
  collection.schema.removeField("qgbfyh8p")

  return dao.saveCollection(collection)
})
