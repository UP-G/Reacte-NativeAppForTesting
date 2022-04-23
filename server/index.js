const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const createTeRouter = require('./routes/createTe.routes');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/auth', createTeRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbCon'));

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
