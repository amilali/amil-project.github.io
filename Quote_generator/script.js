// Get quotes from api
let apiQuotes = [];

// new quote
function newQuote(){
    // pick random quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote); 
    document.getElementById("quote").innerHTML = quote.text;
    document.getElementById("author").innerHTML = quote.author ;
}



async function getQuotes()
{
    const apiUrl = 'https://type.fit/api/quotes';
    try {
            const response = await fetch(apiUrl);
            apiQuotes = await response.json();
           newQuote();
    } catch(error){

            // catch error here
    }
}

// on load
getQuotes();