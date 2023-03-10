
function reverse (stg) {
    let newStg = [];
    if(stg) {
        for (let i= stg.length -1; i >= 0; i--) {
        newStg += stg[i];
        }
    }
    return newStg;
} 
console.log(reverse('hello'));