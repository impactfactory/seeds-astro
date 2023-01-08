migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  collection.listRule = "published = true"
  collection.viewRule = "published = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("89fuy9ud22beqs1")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
