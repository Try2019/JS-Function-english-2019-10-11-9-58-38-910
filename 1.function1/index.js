function reserveString(message) {
    let tempStr='';
    for(let i=message.length-1;i>=0;i--){
        tempStr+=message[i];
    }
    return tempStr;
}

console.log(reserveString("hello world"));