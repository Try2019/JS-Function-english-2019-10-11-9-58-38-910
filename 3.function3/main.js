function alphabetSort(message){
    let temp=[];
    for(let i=0;i<message.length;i++){
        temp.push(message[i]);
    }
    temp.sort();
    let tempStr='';
    for(let i=0;i<temp.length;i++){
        tempStr+=temp[i];
    }
    return tempStr;
}

console.log(alphabetSort("hello"));