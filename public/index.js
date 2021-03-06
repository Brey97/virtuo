'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
var cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];



//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
var rentals = [{
  'id': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//step1

for (var i = 0; i < rentals.length; i++){
  for (var j = 0; j < cars.length; j++){
    if(rentals[i].id == car[j].id){
      rentals[i].price = (car[j].pricePerDay * (rentals[i].returnDate - rentals[i].pickupDate)) + (rentals[i].distance * car[j].pricePerKm)
    }
  }
}


//step2

for (var i = 0; i < rentals.length; i++){
  for (var j = 0; j < cars.length; j++){
    if(rentals[i].id == car[j].id){
      rentals[i].price = (car[j].pricePerDay * (rentals[i].returnDate - rentals[i].pickupDate)) + (rentals[i].distance * car[j].pricePerKm)
    }
    if((rentals[i].returnDate - rentals[i].pickupDate)>1 && (rentals[i].returnDate - rentals[i].pickupDate) <4){
      rentals[i].price = rentals[i].price*0.9
    }
    if((rentals[i].returnDate - rentals[i].pickupDate)>4 && (rentals[i].returnDate - rentals[i].pickupDate) <10){
      rentals[i].price = rentals[i].price*0.7
    }
    if((rentals[i].returnDate - rentals[i].pickupDate)>9){
      rentals[i].price = rentals[i].price*0.5
    }
  }

}

//step3

for (var i = 0; i < rentals.length; i++){
  for (var j = 0; j < cars.length; j++){
    if(rentals[i].id == car[j].id){
      var commission = (rentals[i].price * 0.3)
      for(var k = 0; k<rentals[i].commission.length;k++){
        if(k == 0){
          rentals[i].commission[k] = 0.5 * commission
          commission = commission - rentals[i].commission[k]
        }
        if(k == 1){
          rentals[i].commission[k] =  1 * (rentals[i].returnDate - rentals[i].pickupDate)
          commission = commission - rentals[i].commission[k]
        }
        if(k == 2){
          rentals[i].commission[k] = commission
        }


      }

    }
  }
}

//step4

for (var i = 0; i < rentals.length; i++){
  for (var j = 0; j < cars.length; j++){
    if(rentals[i].id == car[j].id){
      if(rentals[i].options.deductibleReduction == true){
        rentals[i].price = rentals[i].price + ((rentals[i].returnDate - rentals[i].pickupDate)*4)
      }
    }
  }
}
//step5
for (var i = 0; i < rentals.length; i++){
  for (var j = 0; j < cars.length; j++){
    if(actor[i].rentalId == rentals[i].id){
      if(rentals[i].options.deductibleReduction == true){
        for(var k = 0; k<actors[i].payment.length;k++){
          if(actor[i].payment[k].who == driver){
            actor[i].payment[k].amount = rentals[i].price
          }
          if(actor[i].payment[k].who == partner){
            actor[i].payment[k].amount = rentals[i].price
          }
          if(actor[i].payment[k].who == insurance){
            actor[i].payment[k].amount = rentals[i].price
          }
          if(actor[i].payment[k].who == treasury){
            actor[i].payment[k].amount = rentals[i].price
          }
          if(actor[i].payment[k].who == virtuo){
            actor[i].payment[k].amount = rentals[i].price
          }
        }
      }
    }
  }
}




//list of actors for payment
//useful from step 5
var actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

console.log(cars);
console.log(rentals);
console.log(actors);
