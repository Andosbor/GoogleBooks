var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  // `author` must be of type String
  authors: [String],
  description: String,
  image: String,
  link: String,
  title: { type: String, required: true },
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;