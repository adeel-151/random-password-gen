let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_-=+;:,.?1234567890";


let password = "";
for (let i = 0; i < 15; i++) {
    password = password + chars.charAt(Math.floor(Math.random() * chars.length));

}

console.log("password is :   " + password); 
