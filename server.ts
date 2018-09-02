import * as express from 'express';
import {Application} from "express";
import {initRestApi} from "./routes";
import {apiErrorHandler} from "./error-handler";
import * as cors  from 'cors';

const bodyParser = require('body-parser');

const app: Application = express();


app.use(bodyParser.json());

const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "localhost",
    preflightContinue: false
  };
app.use(cors());


initRestApi(app);

// enable pre-flight
app.options('*', cors(options));

app.use(apiErrorHandler);



app.listen(4100, () => {
    console.log('Server is now running on port 4100 ...');
});