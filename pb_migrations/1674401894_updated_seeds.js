migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slboigrn",
    "name": "synonyms",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "70n77hy76dluftm",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slboigrn",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "collectionId": "70n77hy76dluftm",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
