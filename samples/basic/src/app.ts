import * as express from 'express'
const port: number = +(process.env.PORT || 3000);

const app: express.Application = express();
app.use(express.static(__dirname + '/../static'));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})