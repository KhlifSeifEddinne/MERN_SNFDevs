const express = require('express');

const app = express();

//GET App, (path set)
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

//Listen App, (By Port)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));