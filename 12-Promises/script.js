const promise = new Promise((resolve,reject) => {


  setTimeout(() => {
    
    let success = true;
    if(success){
      resolve("data fetched successfully")
    }
    else{
      reject("Error : Data didn't fetched")
    }
  },2000)
})

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })