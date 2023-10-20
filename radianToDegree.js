function radianToDegree(x){
    const pi = Math.PI;
    return (180/pi)*x;
}
console.log(radianToDegree(0.7853981633974483).toFixed(2));