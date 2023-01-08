migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9")

  collection.listRule = "published = true"
  collection.viewRule = "published = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fqh4j6ek9z4ez9")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
