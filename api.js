
const searchButton =()=>{
 const input = document.getElementById('input')
 const error = document.getElementById('error')
 const inputValue = parseInt(input.value) ;
    //error handel
 if (isNaN (inputValue) || inputValue =="" ){
    // alert("please put a number" )
    error.innerText =" * please give a number"
    input.value ="";
    main.innerHTML="";
 }else if (inputValue <= 0){

    error.innerText = " * please give a Positive number"
    input.value ="";
    main.innerHTML="";
 }else if (inputValue > 52) {
    error.innerText = " * Please enter less than 52 numbers"
    input.value ="";
    main.innerHTML="";

 }else{
    fetch (`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
    .then(res => res.json())
    .then(dataLoad => cardDisplay(dataLoad.cards))
    input.value =""
    main.innerHTML="";
    error.innerText = ""   
}


 }

 // display function

const cardDisplay = (cardDataLoad) =>{
    const main = document.getElementById('main') 
    for(const card of cardDataLoad){
        const div = document.createElement('div')
        div.className= 'col-lg-4'
        div.innerHTML =`
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.suit}</h5>
          <p class="card-text">${card.value}</p>
          <a href="#" id="seeMore" onclick="seeDetails('${card.code}')" class="btn btn-primary">Go Card Details </a>
        </div>
      </div>
        `
        main.appendChild(div)


 }

}

const seeDetails=(code)=>{

fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then(res => res.json())
    .then(dataLoad => {
        const allCard = dataLoad.cards;
        
        const singleCard = allCard.find( card => card.code === code)

        const div = document.createElement('div')
        main.innerHTML ="";
        div.innerHTML =`

        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${singleCard.suit}</h5>
          <p class="card-text">${singleCard.value}</p>
        </div>
      </div>
      `
      main.appendChild(div)

    })
  
}

