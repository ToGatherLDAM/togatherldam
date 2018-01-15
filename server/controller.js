const request = require('request-promise');
const promise = require('bluebird');
const db = require('../database');
const yelp = require('../helpers/yelp');


const getAllEvents = (req, res) => {
  db.getAllEvents(req, res)
    .then((res) => {
    	console.log(res);
      res.json(res);
    })
    .catch((error) => {
      res.status(500).json('Data not found');
    });
};

const createEvent = (req, res) => {
  console.log('req!!!!!!!!', req);
	console.log('res!!!!!!!!', res);

	// const params = [req.body.name, req.body.description];
	// db.createEvent(params)
	//   .then(res => {
	//   	res.json(res);
	//   })
	//   .catch(err => {
	//   	res.status(500).json('No success');
	//   })
  

}

// const searchExisting = (req, res) => {
//   var place = req.body.searchedItem;
//   console.log(place);
  
//   if (place === undefined) {
//     yelp.find((err, data) => {
//       if(err) {
//         res.sendStatus(500);
//       } else {
//         // console.log(data);
//         res.json(data);
//       }
//     });
//   } else {
//     yelp.Place.find({place}, (err, data) => {
//       if(err) {
//         res.sendStatus(500);
//       } else {
//         console.log(data);
//         res.json(data);
//       }
//     });
//   }
// };
const searchForNew = (req, res) => {
  //will take place
  //get the place information from Yelp API 
  //save the place information in the database
  var places = req.body.places;
  var place = req.body.searchedItem;
  
  console.log('place in post request', req.body);
  new Promise((resolve, reject) => {
    yelp.getPlacesByName(place, (err, body) => {
      if (err) {
        reject(err);
      } else {
        // console.log(body);
        resolve(body)
      }
    })
  }).then(body => {
    // console.log(body);
      res.json(body);
      return Promise.resolve(body);
  }, error => {
    res.status(500).send({error: error});
  }).then(body => {
      db.createEvent(body);
  })
  
}




module.exports = { 
	getAllEvents: getAllEvents,
	searchForNew: searchForNew,

};