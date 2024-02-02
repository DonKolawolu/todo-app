const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let todos = [];

app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
