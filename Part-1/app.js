const bodyParser = require('body-parser');
const express = require('express');
const port = process.env.PORT || 3000

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/days/:day', (request, response) => {
  response.contentType('application/text');
  const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
  const dayOfWeek = request.params.day.toLowerCase();
  switch(dayOfWeek) {
    case "monday":
        response.json(daysOfWeek.monday);
        break;
    case "tuesday":
        response.json(daysOfWeek.tuesday);
        break;
    case "wednesday":
        response.json(daysOfWeek.wednesday);
        break;
    case "thursday":
        response.json(daysOfWeek.thursday);
        break;
    case "friday":
        response.json(daysOfWeek.friday);
        break;
    case "saturday":
        response.json(daysOfWeek.saturday);
        break;
    case "sunday":
        response.json(daysOfWeek.sunday);
        break;
    default:
        response.status(400).send(`${dayOfWeek} is not a valid day1`);
  }
});

app.post('/api/array/concat', (request, response) => {
  response.contentType('application/JSON');
  const array1 = request.body.array1;
  const array2 = request.body.array2;
  console.log(typeof array1)
  // if array1 isn't an object or array2 isn't an object
  if (typeof array1 === "object" && typeof array2 === "object") {
    response.json({"result": array1.concat(array2)});
  }
  else {
    response.status(400).send({"error": "Input data should be of type Array."});
  }
});

app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}...`);
});
