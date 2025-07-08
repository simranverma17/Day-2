function loginUserMessage(username){
if(username === undefined){
    console.log("Please enter username.")
    return
}
return `${username} just logged in`
}
//console.log(loginUserMessage("Simran"))
console.log(loginUserMessage())
