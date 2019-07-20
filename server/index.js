const express = require('express');
const path = require('path');

const app = express();

const rootDir = path.resolve(__dirname, '..', 'public');
app.use(express.static(rootDir));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server listening port ${port}`);
});