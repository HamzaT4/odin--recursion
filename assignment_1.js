const fibs = (n)=>{
    let fibArr =[];
    for (let i = 0; i < n; i++) i<=1 ? fibArr.push(i):fibArr.push(fibArr[i-1]+fibArr[i-2]);
    return fibArr;
}

const fibsRec = (n)=> n<=2 ?  [0,1].slice(0,n) : fibsRec(n-1).concat(fibsRec(n-1).pop()+fibsRec(n-2).pop());
