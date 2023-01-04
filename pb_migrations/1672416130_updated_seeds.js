migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e8robpmb",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "jjjlksaws6jcg0c",
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
    "id": "e8robpmb",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "collectionId": "jjjlksaws6jcg0c",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
