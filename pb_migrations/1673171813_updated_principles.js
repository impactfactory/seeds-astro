migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  collection.listRule = "published = true"
  collection.viewRule = "published = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8dytfw97kuzboc")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
