"use strict"
/*************************************************
 *  Express js
 **************************************************/
const express = require('express');
const app = express();
app.use(express.json());

let books = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { title, author, publishedDate } = req.body;

  const id = Date.now().toString();
  const book = {
    id:"001",
    title:"book",
    author:"mostafa kamal",
    publishedDate:"11-05-2023"
  };
  books.push(book);

  res.json(book);
  
});

// delete a book
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];

    res.json({ message: 'Book successfully deleted.' });
  } else {
    res.json({ message: 'Book not found.' });
  }
});

app.listen(3000, () => {
  console.log('Server Run success');
});
