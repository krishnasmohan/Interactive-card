const name = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')

let form = document.getElementById('form')

const nameError = document.getElementById('name-error')
const numberError = document.getElementById('number-error')
const monthError = document.getElementById('month-error')
const cardFrontNumber = document.querySelector('.card-front-number')
const cvcError = document.getElementById('cvc-error')


var nameErr = true
var numbErr = true
var monthErr = true
var cvcErr = true

//Form submission

form.addEventListener('submit',(e)=>{
        //name input validation
        if(name.value===""||name.value===null){
            nameError.innerHTML="Name required"
            nameErr = false
        }else{
            nameError.innerHTML=""
            nameErr = true
        }
    
        //number input validation
        if(number.value===""||number.value===null){
            numberError.innerHTML="Number is required"
            numbErr = false
        }else{
            if(number.value.length>16||number.value.length<16){
                numberError.innerHTML="Wrong format.Enter valid card number"
                numbErr = false
            }else{
                if(isNumber(number.value)){
                    numberError.innerHTML="Wrong fromat,numbers only"
                    numbErr = false
                }else{
                    numberError.innerHTML=""
                    numbErr = true
                }
            }
        }
    
        //month year validation
        if(month.value===''||year.value===''){
            monthError.innerHTML="Inputs required"
            monthErr = false
        }else{
            if(month.value.length>2 || month.value.length<2 || year.value.length>2 || year.value.length<2){
                monthError.innerHTML="Wrong format"
                monthErr = false
            }else{
                monthError.innerHTML=""
                monthErr = true
            }
        }
    
        //cvc validation
        if(cvc.value===''){
            monthError.innerHTML=" All inputs required"
            cvcErr = false
        }else{
            if(cvc.value.length<3||cvc.value.length>3){
                cvcError.innerHTML="Wrong format"
                cvcErr = false
            }else{
                cvcError.innerHTML=""
                cvcErr = true
            }
        } 
        
        if(nameErr && numbErr && monthErr && cvcErr == true){
            window.open('submit.html')
            
        }else{
            e.preventDefault()
        }
});




function isNumber(value) {
    return isNaN(value);
}
let cardFrontNum = document.querySelector('.card-front-number');

function cardNumberUpdate(){
    let cardNumber = document.getElementById('number').value;
    document.querySelector(".card-front-number").innerHTML=cardNumber.slice(0,4).concat(" ".concat(cardNumber.slice(4,8).concat(" ".concat(cardNumber.slice(8,12).concat(" ".concat(cardNumber.slice(12,16)))))));
}
function cardNameUpdate(){
    let cardName = document.getElementById('name').value;
    document.querySelector('.frontcard-caption').innerHTML=cardName;
}
function cardMonthUpdate(){
    let cardMonth = document.getElementById('month').value;
    document.querySelector('.cardfront-date').innerHTML=cardMonth;
}
function cardYearUpdate(){
    let cardYear = document.getElementById('year').value;
    document.querySelector('.yearSpan').innerHTML=cardYear;
}
function cardCvc(){
    let cardCvc = document.getElementById('cvc').value;
    document.querySelector('.card-back-numb').innerHTML=cardCvc;
}


