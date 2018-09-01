
import {Application} from "express";
import {apiLuisGetAppsList} from "./api/luis/get-apps-list";

export function initRestApi(app:Application) {

    app.route('/api/luis/apps').get(apiLuisGetAppsList);

}