function isBestFriend(p,q){
if(p.name===q.friend && p.friend===q.name)return true;
return false;
}
console.log(isBestFriend( { name: "abul", friend: "kabul" },
{ name: "kabul", friend: "abul" }));