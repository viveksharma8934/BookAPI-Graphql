const mongoose = require('mongoose');

const connectDB = async () => {
  const dbURI = process.env.MONGO_URI

  mongoose
    .connect("mongodb+srv://test:test123@cluster0.z2smv.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
      console.log(`Connected to DB  ${res.connection.host} `)
    })
    .catch((err) => console.log(err))
}

module.exports = connectDB
