function isJavaScriptFile(s){
    if(s.length <4)return false;
    let n = s.length;
    if(s[n-1]==='s' && s[n-2]==='j' && s[n-3]==='.')return true;
    else return false;
}
console.log(isJavaScriptFile("image.js."));