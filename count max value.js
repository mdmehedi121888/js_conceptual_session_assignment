const ar = [-1,2,-3,4,5,6,-7,8,-9,10];
let cnt=0;
for(const i of ar){
    if(i>5)++cnt;
}
console.log(cnt);