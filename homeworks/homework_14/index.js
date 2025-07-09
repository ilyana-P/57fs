function getRandom() {
  return Math.floor(Math.random() * 2); // возвращает 0 либо 1
}

const randomPromise = new Promise(function (res, rej) {
  setTimeout(() => {
    if (getRandom()) {
      res("Best day of my life");
    } else {
      rej(new Error("Something is off"));
    }
},5000);
});

console.log(randomPromise); // Promise { <pending> }

randomPromise
  .then((best) => {
    console.log(best);
  })
  .catch((err) => {
    console.log(err);
  });