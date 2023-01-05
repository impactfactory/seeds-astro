migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pos66gba",
    "name": "published",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvmv34lc",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zn79sgba",
    "name": "url",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jjjlksaws6jcg0c")

  // remove
  collection.schema.removeField("pos66gba")

  // remove
  collection.schema.removeField("cvmv34lc")

  // remove
  collection.schema.removeField("zn79sgba")

  return dao.saveCollection(collection)
})
