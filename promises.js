//  asynchronous programming
//  its an object to handle the async operation  and its method .then and .catch and its three stage === pending,resolve,reject
// pending =====undefined
// fulfilled =====a result value
// rejected ===== an object error
//  anonymous function function k andr function function(){}

// var myPromise = new Promise(function (resolve, reject) {
//   var demand = "i want burger";
//   if (demand == "i want burger") {
//     resolve("Promises Fulfilled");
//   } else {
//     reject("Promises Not Fulfilled");
//   }
// });
// //  then() method
// myPromise
//   .then(function (fulfilled) {
//     console.log(fulfilled);
//   })
//   .catch(function (notFulfilled) {
//     console.log(notFulfilled);
//   });

// api stand for application programming interface
// its an end point
//  its a function that return a promise
// exchange the data between client side and server side
//  its a request and response
//  request === client side
//  response === server side
// Also called middleware or waiter , manager assistant called api
//  data chahiye get ethod use karyn gy
//  paggination,segmentation
//  fetch return promises
//  fetch is a method to get the data and they return response wheather its fulfilled or not
//   status http caode  400===invalid syntax,404=== page not found,200=== request sucessful
// fetch("https://api.escuelajs.co/api/v1/products")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function showData() {
  var dataShow = new Promise(function (resolve, reject) {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
    // })
    //                 showData().then(function(data){
    //                     console.log(data);
    //                     })
    //                     .catch(function(error){
    //                         console.log(error);
  });
  return dataShow;
}



let product_html = `
  <div class="products">
      <div class="product">
        <img src="" alt="" class="produt-image">
        <h2 class="product-title"></h2>
        <p class="description"></p>
        <h3 class="prize"></h3>
        <a href="#!" class="data-addtoCart"></a>

      </div>
    </div>`;
showData()
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
