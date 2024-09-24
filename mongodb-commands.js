db.createCollection("myCollection")


db.myCollection.insertOne({ name: "Sample Document" })


db.myCollection.insertOne({
    name: "John Doe",
    age: 30,
    city: "New York"
})


db.myCollection.insertMany([
    { name: "Alice", age: 25, city: "Los Angeles" },
    { name: "Bob", age: 28, city: "Chicago" }
])


db.myCollection.find()


db.myCollection.find({ name: "John Doe" })


db.myCollection.updateOne(
    { name: "John Doe" },
    { $set: { age: 31 } }
)


db.myCollection.deleteOne({ name: "John Doe" })


