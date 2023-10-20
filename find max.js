function reverseString(s){
    const ar = s.split("");
    ar.reverse();
    let st=ar.join("");
    return st;
}
function findMax(s,st){
if(s.length >= st.length)
{
    return reverseString(s);
}
else
{
   return  reverseString(st);
}
}
console.log(findMax("mehedii","kamrull"));