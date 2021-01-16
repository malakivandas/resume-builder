const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Resume Builder API' })
);

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/resumes', require('./routes/resumes'));
app.use('/api/users', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
