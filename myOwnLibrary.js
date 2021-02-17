function bounceOff(a,b){
    if(a.x - b.x <b.width/2 + a.width/2 
      &&b.x-a.x<b.width/2 + a.width/2){
        a.velocityX = a.velocityX * (-1);
        b.velocityX = b.velocityX * (-1);
      }
      if(a.y - b.y <b.width/2 + a.width/2 
        &&b.y-a.y<b.width/2 + a.width/2){
          a.velocityY= a.velocityY * (-1);
          b.velocityY = b.velocityY * (-1);
        }
  
    
  }



  function isTouching(Upasana,Thaarunyaa){
    if(Upasana.x - Thaarunyaa.x <Thaarunyaa.width/2 + Upasana.width/2 
       &&Thaarunyaa.x-Upasana.x<Thaarunyaa.width/2 + Upasana.width/2 &&
       Upasana.y-Thaarunyaa.y<Thaarunyaa.width/2+Upasana.width/2&& 
       Thaarunyaa.y-Upasana.y<Thaarunyaa.width/2+Upasana.width/2){
       return true;
   }
   else{
   return false;
   } 
   }