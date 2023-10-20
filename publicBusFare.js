function publicBusFare(x){
    return ((x%50)%11)*250;
}
console.log(publicBusFare(55));