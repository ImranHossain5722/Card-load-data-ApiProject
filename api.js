 const searchButton =()=>{
 const input = document.getElementById('input')
 const error = document.getElementById('error')
 const inputValue = input.value ;
    //error handel
 if (isNaN (inputValue) || inputValue =="" ){
    // alert("please put a number" )
    error.innerText =" * please give a number"
    input.value ="";
 }else if (inputValue <= 0){

    error.innerText = " * please give a Positive number"
    input.value ="";
 }else{
    fetch (`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
    .then(res => res.json())
    .then(dataLoad => cardDisplay(dataLoad))
    input.value =""   
}


 }

 // display function
const cardDisplay = cardDataLoad =>{
console.log(cardDataLoad);


 }

