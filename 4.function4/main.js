function countWords(message){
    let temp=[];
    temp=message.split(' ');
    return temp.length;
}

console.log(countWords('Good morning, I love JavaScript.'));