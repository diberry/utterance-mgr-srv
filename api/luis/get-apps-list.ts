import {Request, Response} from 'express';
import * as Path from 'path';
import  * as _ from 'lodash';
import {onError} from "../onError";
import {onSuccess} from "../onSuccess";




export function apiLuisGetAppsList(req:Request, res:Response) {

        console.log('apiLuisGetAppsList ' + new Date());
        console.log(JSON.stringify(req.headers));
        const mockFileLocation = (Path.join(__dirname, '../../mock-data/apps-list.json'));
        console.log(mockFileLocation);

        res.sendFile(mockFileLocation);
    /*
    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch( _.partial(onError, res, `Could not create lesson`) );
*/
}
