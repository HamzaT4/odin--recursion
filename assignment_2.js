const mergeSort =  (arr)=>{
    if (arr.length==1) {
      
        return arr;
        
    } else {
        let midPoint = Math.ceil((arr.length)/2) ;
        let leftSide = mergeSort(arr.slice(0,midPoint));
        let rightSide = mergeSort(arr.slice(midPoint,arr.length));
        console.log(leftSide,rightSide);
        let tempArr = [];
        let j =0;
        for (let i = 0; i < leftSide.length; i++) {
            if (leftSide[i]<rightSide[j]) {
                tempArr.push(leftSide[i]);
             
               if (i==leftSide.length-1 )tempArr= tempArr.concat(rightSide.slice(j,rightSide.length));
                
            }else{
                tempArr.push(rightSide[j]);
                j++;
                i--;
                if (j==rightSide.length){
                    tempArr= tempArr.concat(leftSide.slice(i+1,leftSide.length));
                    break;
                }
            }
        }
        return tempArr;
    }
}

;
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));