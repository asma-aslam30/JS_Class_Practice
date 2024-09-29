//  callback

// function getData(dataId, getNext) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNext) {
//       getNext();
//     }
//   }, 2000);
// } 

// // callback hell/nested callback
// getData(1, () => {
//   console.log("getting data2 ...");

//   getData(2, () => {
//     console.log("getting data3 ...");

//     getData(3, () => {
//       console.log("getting data4 ...");

//       getData(4);
//     });
//   });
// });


//  promises

// let promise= new Promise((resolve,reject)=>{
//     console.log(" i am a promise");
//     // resolve("sucesss") 
//     reject("some error occur")
// })
// console.log(promise);

// function getData(dataId,getNext){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if (getNext) {
//                 getNext();
//             }
//         },5000);
//     })
// }
// let res=getData(123)
// console.log(res  );


//  for handle promise we used .then() and .catch()
