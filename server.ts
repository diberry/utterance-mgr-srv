import * as express from 'express';
import {Application} from "express";
import {initRestApi} from "./routes";
import {apiErrorHandler} from "./error-handler";

const bodyParser = require('body-parser');

const app: Application = express();


app.use(bodyParser.json());

initRestApi(app);

app.use(apiErrorHandler);



app.listen(4100, () => {
    console.log('Server is now running on port 4100 ...');
});