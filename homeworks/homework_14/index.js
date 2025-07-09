function getRandom() {
  return Math.floor(Math.random() * 2); 
}

const randomPromise = new Promise((res, rej) => {
  if (getRandom()) {
    res("Best day of my life");
  } else {
    rej(new Error("Something is off"));
  }
});

console.log(randomPromise); 

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
