import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname ,'../client/dist/index.html')));

app.use('*', (err, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
})


app.listen(port, () => console.log(`server listening on port ${port}`))