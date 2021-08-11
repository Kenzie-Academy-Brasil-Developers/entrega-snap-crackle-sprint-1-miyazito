function snapCrackle (maxValue){
    let str = ""
   for(let i = 1; i <= maxValue; i++){
     if(i%2 !== 0 && i%5 === 0){
         str += " SnapCrackle,"
     }
     else if(i%2 !== 0){
         str += " Snap,"
     } 
     else if(i%5 === 0){
         str += " Crackle,"
     }
     else{
         str += " " + i.toString() +","
     }
   }
   return str
}