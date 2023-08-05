const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const resultEl = document.getElementById('result')
const lengthE1 = document.getElementById('length')
const uppercaseE1 = document.getElementById('uppercase')
const lowercaseE1 = document.getElementById('lowercase')
const numbersE1 = document.getElementById('numbers')
const symbolsE1 = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


function data (dataSet){
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}
// console.log(data(upperSet))
//  let password ="";
const generatePassword =(password ="")=>{
    if(uppercaseE1.checked){
         password +=data(upperSet)
    }
    if(lowercaseE1.checked){
        password +=data(lowerSet)
   }
   if(numbersE1.checked){
    password +=data(numberSet)
}
if(symbolsE1.checked){
    password +=data(symbolSet)
}
if(password.length < lengthE1.value){
    return generatePassword(password)
}


resultEl.innerHTML =truncateString(password,lengthE1.value)
    console.log(password)


}
clipboardEl.addEventListener('click', () => {
    alert("password copied")
    // const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
    navigator.clipboard.writeText(password)

})

// generatePassword()

generateEl.addEventListener("click", function(){
    generatePassword()
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.slice(0, num);
        return subStr;
    } else {
        return str;
    }
}

































// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// }

// clipboardEl.addEventListener('click', () => {
    
// })

// generateEl.addEventListener('click', () => {
    
// })

// function generatePassword(lower, upper, number, symbol, length) {
    
// }

// function getRandomLower() {
// }

// function getRandomUpper() {
// }

// function getRandomNumber() {
// }

// function getRandomSymbol() {
// }