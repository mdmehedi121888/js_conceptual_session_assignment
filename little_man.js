const person = [
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
]
let ans;
let mx = Number.MAX_VALUE;
for(const i of person){
    if(i.age<mx){
        mx = i.age;
        ans = i.name;
    }
}
console.log(ans);