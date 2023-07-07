function getpromises() {
    return fetch('https://type.fit/api/quotes');
  }
  const get = getpromises();
  console.log(get);
  
let arr = new Array();


  get.then(response => {
    return response.json();
  })
  .then((data)=>{
    arr=data;
    printarr(arr);
  });
  //error
  get.catch(error => {
    displayError(error);
  });
   //another way of writing
//    async function fetchData() {
//     try {
//       const response = await fetch('https://type.fit/api/quotes');
//       const data = await response.json();
//       printarr(data);
//     } catch (error) {
//       displayError(error);
//     }
//   }
  
//   fetchData();


  printarr =(arr)=>{
    let h1 = document.getElementById("amil");
    h1.textContent=arr[Math.floor(Math.random()*arr.length)].text;
  }

  // if error occured
  function displayError(error) {
    let errorElement = document.getElementById("amil");
    errorElement.textContent = "An error occurred: " + error;
  }