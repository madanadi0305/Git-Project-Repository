function fibonacci(number){
if(number<0){
    return -1;
}

if(number===0||number===1){
    return 1;
}
else{
    return number*fibonacci(number-1);
}

}

fibonacci(5);