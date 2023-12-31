const twitterbtn = document.getElementById("twitter");
const quotebtn = document.getElementById("new-quote");
const quoteContainer = document.getElementById("quote-container");
const authortext = document.getElementById("author");
const quotetext = document.getElementById("quote");
const loader = document.getElementById("loader")

// loader
function loading()
{
    quoteContainer.hidden = true;
    loader.hidden=false;

}

function complete()
{
    quoteContainer.hidden = false;
    loader.hidden= true;

}
// Get quotes from api (2)
let apiQuotes = [];

// new quote
function newQuote(){
    loading();
    // pick random quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote); 

    //check if author is nul
    if(!quote.author)
    {
        authortext.textContent = 'Unknown'; 
    }
    else{
    authortext.textContent = quote.author;
    }
    quotetext.textContent = quote.text;
    complete();
}


// make api call (1)
async function getQuotes()
{
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
            const response = await fetch(apiUrl);
            apiQuotes = await response.json();
           newQuote();
    } catch(error){

            // catch error here
    }

}

// tweet (3)
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotetext.textContent} - ${authortext.textContent}`; // use alt+z -> to show all code in viewport
    window.open(twitterUrl, '_blank');
}

// Event lisner
quotebtn.addEventListener('click', newQuote);
twitterbtn.addEventListener('click', tweetQuote);




// on load
getQuotes();
