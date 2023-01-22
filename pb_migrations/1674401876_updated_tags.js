migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm")

  collection.name = "synonyms"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("70n77hy76dluftm")

  collection.name = "tags"

  return dao.saveCollection(collection)
})
