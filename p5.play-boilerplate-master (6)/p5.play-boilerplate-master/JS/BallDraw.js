function BallDraw(){
    this.ballDrawnNumber=[];
    this.ballDrawnLetter=[];
    this.drawBall=()=>{
        let ballLetter;
        let ballNumber= 1 + Math.floor(Math.random()* 75);
        ballDrawnTemp.push(ballNumber);
        this.checkRepeatition(ballNumber)
        if(first!==0){
            //alert("repeated")
            this.ballDrawnLetter.push("Getting another number for you.Please click to draw a new number")
            let ballNumber= 1 + Math.floor(Math.random()* 75);
            this.checkRepeatition(ballNumber)
        }
        else{
            if(ballNumber < 15){
                //   console.log("b")
                   this.ballDrawnLetter.push("B");
                   this.ballDrawnNumber.push(ballNumber)
               }
               else if(ballNumber >15 && ballNumber <=30){
                  // console.log("i")
                   this.ballDrawnLetter.push("I");
                   this.ballDrawnNumber.push(ballNumber)
               }
               else if(ballNumber >30 && ballNumber <=45){
                  // console.log("n")
                   this.ballDrawnLetter.push("N");
                   this.ballDrawnNumber.push(ballNumber)
               }
               else if(ballNumber >45 && ballNumber <=60){
                  // console.log("g")
                   this.ballDrawnLetter.push("G");
                   this.ballDrawnNumber.push(ballNumber)
               }
               else//(ballNumber >60 && ballNumber <=75)
               {
                  // console.log("o")
                   this.ballDrawnLetter.push("O");
                   this.ballDrawnNumber.push(ballNumber)
               }
            
        }
        
    }
    this.checkRepeatition=(ballNumber)=>{
        let index=0
        //index=2
           while(index < ballDrawnTemp.length-1) {
                console.log(index)
                console.log(ballNumber)
                console.log(ballDrawnTemp)
                console.log(this.ballDrawnNumber)
              
                    if(ballDrawnTemp[index]===ballNumber ){
                       
                        first= 1
                        break;
                   
                        
                    }
                    else{
                        first=0
                    }
                    index++
            }
        
        }
}