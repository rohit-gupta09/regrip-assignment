const express = require('express');
const bodyParser=require('body-parser')
const app = express();


app.use(bodyParser.json())
const notesRouter = require('./routes/route');

app.use(express.json());
app.use('/notes', notesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
