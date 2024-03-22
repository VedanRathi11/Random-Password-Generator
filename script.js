const passwordBox = document.getElementById("password");
const lengths = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChar = upperCase + lowerCase + numbers + symbol ;

const createPassword = () =>{
    let password ="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    password += numbers[Math.floor(Math.random() * numbers.length)]; 
    password += symbol[Math.floor(Math.random() * symbol.length)]; 

    while(lengths > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]; 
    }
    passwordBox.value = password;
}

const copyPassword = () =>{
    passwordBox.select();
    document.execCommand("copy")
}