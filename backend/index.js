import express from 'express';
import prisma from './client.js';

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email } = req.body;

  const newUser = await prisma.user.create({ data: { name, email } });

  res.status(200).json({ msg: 'User created', user: newUser });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
