const express = require('express');
require('./config/config');

const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ msg: 'get Usuario' });
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const idUser = req.params.id;
  res.json({ msg: `put Usuario ${idUser}` });
});

app.delete('/api/users', (req, res) => {
  res.json({ msg: 'delete Usuario' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
