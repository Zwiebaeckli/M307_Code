/*
Aufgabe 5: Daten zu den Schuhen ausgeben (server05.js)
Ergänzen Sie die Kommentare ??, damit der gestartete
lokale Server auf Port 4000 die Daten aus der Datei cars.json
dem Testclient Postman bei den HTTP-Requests die entsprechenden
HTTP-Responses zurückgibt:

Test:
$ curl -X GET http://localhost:4000/api/shoes
[{"id":1,"model":"Old School","brand":"Vans","Price":"70","sizes":["41","42","43","44","45","46","47"],"individualcolors":["black","wh
....

$ curl -X GET http://localhost:4000/api/shoes/1
[{"id":1,"model":"Old School","brand":"Vans","Price":"70","sizes":["41","42","43","44","45","46","47"],"individualcolors":["black","wh
ite","cream-white"]}]

$ curl -X GET http://localhost:4000/api/shoes/2
[{"id":2,"model":"Air Force 1","brand":"Nike","Price":"120","sizes":["36","36.5","37","38"],"individualcolors":["black","white","pink"
,"türkis","Rot"]}]
...
$ curl -X GET http://localhost:4000/api/shoes/6
Keine Daten zum Schuh mit ID=6 gefunden!


*/

//Add module
const express = require('express');//??
//Important: DO NOT FORGET round braces!
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
//listen to port and show message that server is running
app.listen(port);
console.log(`Running at Port ${port}`);

//import shoes daten
const data = require('./data/shoes.json');//??

//??
//request without id ..
app.request
    //then send all daten
//??
//??


/**
 * Send all shoes that matches the provided size as parameter
 * when requesting /api/shoes/sizes/:value
 */
//??
    //parse query parameter
//??
    //filter entry by id and assign result to shoe
//??
//??
//??
    //if article is empty
//??
        //then send message: Keine Daten ...
//??
//??
        //else send article entry
//??
//??
//??

/**
 * Send all shoes that are equal or lower as the provided price
 * when requesting /api/price/lower/<price>
 */
//??
    //parse query parameter
//??
//??
//??
    //if article is empty
//??
        //then send message: Keine Daten ...
//??
//??
        //else send article entry
//??
//??
//??

/**
 * Send all shoes that matches the provided brand as parameter
 * when requesting /api/shoes/brand/:name
 */
//??
    //parse query parameter
//??
    //set regex
//??
//??
//??
//??
        //then send message: Keine Daten ...
//??
//??
        //else send article entry
//??
//??
//??
