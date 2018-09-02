import {Request, Response} from 'express';
import {Application} from "express";
import {apiLuisGetAppsList} from "./api/luis/get-apps-list";

function root(req:Request, res:Response){
    console.log("root");
    res.send("Cognitive Data Manager");
    res.end();
}

export function initRestApi(app:Application) {

    app.route('/').get()
    app.route('/api/luis/apps').get(apiLuisGetAppsList);

}