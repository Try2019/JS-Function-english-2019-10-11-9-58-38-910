function palindrome(message) {
    let leng=message.length-1;
    for(let i=0;i<leng/2;i++){
        if(message[i]!==message[leng-i])
            return false;
    }
    return true;
}

console.log(palindrome('abcba'));