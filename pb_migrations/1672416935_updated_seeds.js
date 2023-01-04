migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ityuw4q7kd5lj0s")

  // remove
  collection.schema.removeField("e8robpmb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrievicl",
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

  // add
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

  // remove
  collection.schema.removeField("hrievicl")

  return dao.saveCollection(collection)
})
