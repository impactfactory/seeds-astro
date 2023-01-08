migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94")

  collection.listRule = "published = true"
  collection.viewRule = "published = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ll0a1l8muzv0d94")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
