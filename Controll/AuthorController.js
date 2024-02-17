const Author = require('../models/Author');

const authorDatabase = [];

const login = (req, res) => {
  const { email, password } = req.body;

  const author = authorDatabase.find(author => author.email === email && author.password === password);

  if (author) {
    res.status(200).json({ message: 'Login successful', author });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const register = (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email is already registered
  const existingAuthor = authorDatabase.find(author => author.email === email);
  if (existingAuthor) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  // Create a new author
  const newAuthor = new Author(name, email, password);
  authorDatabase.push(newAuthor);

  res.status(201).json({ message: 'Author registered successfully', author: newAuthor });
};

module.exports = { login, register };