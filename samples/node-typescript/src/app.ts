import * as express from 'express';
import * as os from 'os';

const port: number = +(process.env.PORT || 3000);

const app: express.Application = express();
app.use(express.static(__dirname + '/../static'));

app.get('/api', function (req, res) {
    res.send(`<h1>${os.hostname()}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});