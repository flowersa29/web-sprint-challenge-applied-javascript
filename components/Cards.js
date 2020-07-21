// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


    function newcards(cardsURL){

            const carddiv = document.createElement('div');
            const headlinediv = document.createElement('div');
            const authordiv = document.createElement('div');
            const imgcontainer =document.createElement('div');
            const image = document.createElement('img');
            const span = document.createElement('span');


            carddiv.classList.add('card')
            headlinediv.classList.add('headline')
            authordiv.classList.add('author')
            imgcontainer.classList.add('img-container')

           
            carddiv.appendChild(headlinediv);
            carddiv.appendChild(authordiv);
            carddiv.appendChild(imgcontainer);
           carddiv.appendChild(image);
            carddiv.appendChild(span);
           
            carddiv.textContent = cardsURL
            headlinediv.textContent= headline
            authordiv.textContent = authorName
            imgcontainer.textContent =cardsURL
            image.src = cardsURL
            span.textContent =cardsURL

    
        return carddiv;
    }
    const entryPoint = document.querySelector('cards-container');
    console.log(entryPoint);

    
    axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(Response =>{
        console.log(Response.data.articles.javascript[0]);
        Response.data.articles.forEach(_items =>{
        entryPoint.append(newcards(data.articles));
        })
    })
    //  .catch((_err) => {
    //      console.log('the data was not returned', error)
    //  })

     
    // const cardcontainer = document.querySelector('.cards-container').appendChild(newcards())


        // axios.get('https://lambda-times-backend.herokuapp.com/articles')
        // .then(Response => {
        //     console.log(Response)
        // })
//     })

//     .catch(error => {
//         console.log('the data was not returned', error);
//     });

    // 
    // console.log( cardcontainer )

    // Data.topics.forEach(url => {
    //     cardcontainer.appendChild(newcards(data.cards))
        

