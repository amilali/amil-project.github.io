function getpromises() {
    return fetch('https://type.fit/ap/quotes');
  }
  const get = getpromises();
  console.log(get);
  
let arr = new Array();

get.catch(error=>{
    console.log(error)
})

  get.then(response => {
    return response.json();
  })
  .then((data)=>{
    arr=data;
    printarr(arr);
  });
let h1 = document.getElementById("amil");
  printarr =(arr)=>h1.textContent=arr[Math.floor(Math.random()*arr.length)].text;