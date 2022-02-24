var divBingoCard= document.getElementById("divBingoCard")
var txtInput=document.getElementById("txtInput")
var pCardCount=document.getElementById("pCount")
var btnDraw=document.getElementById("btnDraw")
var pDrawBall=document.getElementById("pdrawBall")
let counter=0;
let card;
let ballDraw;
let cardMatrixTotal=[];
let cardMatrix;
let cardLength;
let BingoWinner=false;
let ballDrawnTemp=[];
let first=0
function draw() {
  //background(255,255,255);  
if(txtInput===""){
alert("Enter Numbers")
}
else{
  if(isNaN(txtInput.value)){
    alert("Enter Numbers Only")
    txtInput.value=null
  }
  else{
    for(var i=0;i<txtInput.value; i++){
      card=new BingoCard()
      card.generateMatrix()
      divBingoCard.innerHTML+=card.drawCard()
      counter++ 
      cardMatrix=card.matrix
      cardMatrixTotal.push(cardMatrix)

    }
    txtInput.value=null
  }
}
pCardCount.innerHTML=`Number Of Card/s:${counter}`

}

function drawBall(){
  ballDraw=new BallDraw()
  ballDraw.drawBall();
  pdrawBall.innerHTML=`<div class="item">  <img src="ball.jpg" alt="Snow" style="width:10%;"><p>${ ballDraw.ballDrawnLetter + "-"+ ballDraw.ballDrawnNumber} </p></div>`
  for(var i=0 ; i< cardMatrixTotal.length; i++){
    for(var j=0; j<cardMatrixTotal[i].length;j++){
      for(var k=0; k < cardMatrixTotal[i][j].length; k++){
    
        console.log(cardMatrixTotal)
        if(cardMatrixTotal[i][j][k]==ballDraw.ballDrawnNumber){
          //alert("got it ")
          document.getElementById(cardMatrixTotal[i][j][k]).style.background=rgb(121,252,109);
          checkBingoWinner();
        }
      }
    } 

  }

if(BingoWinner===true){
  showWinnerCard()
}
}
function checkBingoWinner(){
  //column 0 and respective rows
  let c0r0=document.getElementById(cardMatrixTotal[0][0][0]);
  let c0r0_color=c0r0.style.background;
  let c0r1=document.getElementById(cardMatrixTotal[0][0][1]);
  let c0r1_color=c0r1.style.background;
  let c0r2=document.getElementById(cardMatrixTotal[0][0][2]);
  let c0r2_color=c0r2.style.background;
  let c0r3=document.getElementById(cardMatrixTotal[0][0][3]);
  let c0r3_color=c0r3.style.background;
  let c0r4=document.getElementById(cardMatrixTotal[0][0][4]);
  let c0r4_color=c0r4.style.background;

    //column 1 and respective rows
    let c1r0=document.getElementById(cardMatrixTotal[0][1][0]);
    let c1r0_color=c1r0.style.background;
    let c1r1=document.getElementById(cardMatrixTotal[0][1][1]);
    let c1r1_color=c1r1.style.background;
    //alert(c1r1)
    let c1r2=document.getElementById(cardMatrixTotal[0][1][2]);
   //alert(c1r2)
    let c1r2_color=c1r2.style.background;
    let c1r3=document.getElementById(cardMatrixTotal[0][1][3]);
    let c1r3_color=c1r3.style.background;
    let c1r4=document.getElementById(cardMatrixTotal[0][1][4]);
    let c1r4_color=c1r4.style.background;

      //column 2 and respective rows
  let c2r0=document.getElementById(cardMatrixTotal[0][2][0]);
  let c2r0_color=c2r0.style.background;
  let c2r1=document.getElementById(cardMatrixTotal[0][2][1]);
  let c2r1_color=c2r1.style.background;
  let c2r2=document.getElementById(cardMatrixTotal[0][2][2]);
  let c2r2_color=c2r2.style.background;
  let c2r3=document.getElementById(cardMatrixTotal[0][2][3]);
  let c2r3_color=c2r3.style.background;
  let c2r4=document.getElementById(cardMatrixTotal[0][2][4]);
  let c2r4_color=c2r4.style.background;

    //column 3 and respective rows
    let c3r0=document.getElementById(cardMatrixTotal[0][3][0]);
    let c3r0_color=c3r0.style.background;
    let c3r1=document.getElementById(cardMatrixTotal[0][3][1]);
    let c3r1_color=c3r1.style.background;
    let c3r2=document.getElementById(cardMatrixTotal[0][3][2]);
    let c3r2_color=c3r2.style.background;
    let c3r3=document.getElementById(cardMatrixTotal[0][3][3]);
    let c3r3_color=c3r3.style.background;
    let c3r4=document.getElementById(cardMatrixTotal[0][3][4]);
    let c3r4_color=c3r4.style.background;

      //column 4 and respective rows
  let c4r0=document.getElementById(cardMatrixTotal[0][4][0]);
  let c4r0_color=c4r0.style.background;
  let c4r1=document.getElementById(cardMatrixTotal[0][4][1]);
  let c4r1_color=c4r1.style.background;
  let c4r2=document.getElementById(cardMatrixTotal[0][4][2]);
  let c4r2_color=c4r2.style.background;
  let c4r3=document.getElementById(cardMatrixTotal[0][4][3]);
  let c4r3_color=c4r3.style.background;
  let c4r4=document.getElementById(cardMatrixTotal[0][4][4]);
  let c4r4_color=c4r4.style.background;

  //check if winner by vertical
  if(c0r0_color===rgb(121,252,109) && c0r1_color===rgb(121,252,109)  && c0r2_color===rgb(121,252,109)  && c0r3_color===rgb(121,252,109)  && c0r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r0.style.background="yellow";
    c0r1.style.background="yellow";
    c0r2.style.background="yellow";
    c0r3.style.background="yellow";
    c0r4.style.background="yellow";
  }
  else  if(c1r0_color===rgb(121,252,109) && c1r1_color===rgb(121,252,109)  && c1r2_color==rgb(121,252,109)  && c1r3_color===rgb(121,252,109)  && c1r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c1r0.style.background="yellow";
    c1r1.style.background="yellow";
    c1r2.style.background="yellow";
    c1r3.style.background="yellow";
    c1r4.style.background="yellow";
  }

  else  if(c2r0_color===rgb(121,252,109) && c2r1_color===rgb(121,252,109)  && c2r2_color===rgb(121,252,109) && c2r3_color===rgb(121,252,109)  && c2r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c2r0.style.background="yellow";
    c2r1.style.background="yellow";
    c2r2.style.background="yellow";
    c2r3.style.background="yellow";
    c2r4.style.background="yellow";
  }
  else  if(c3r0_color===rgb(121,252,109) && c3r1_color===rgb(121,252,109) && c3r2_color===rgb(121,252,109)  && c3r3_color===rgb(121,252,109)  && c3r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c3r0.style.background="yellow";
    c3r1.style.background="yellow";
    c3r2.style.background="yellow";
    c3r3.style.background="yellow";
    c3r4.style.background="yellow";
  }
  else  if(c4r0_color===rgb(121,252,109) && c4r1_color===rgb(121,252,109)  && c4r2_color===rgb(121,252,109)  && c4r3_color===rgb(121,252,109)  && c4r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c4r0.style.background="yellow";
    c4r1.style.background="yellow";
    c4r2.style.background="yellow";
    c4r3.style.background="yellow";
    c4r4.style.background="yellow";
  }

  //checking for bingo winner by horizobntal
  else  if(c0r0_color==="red" && c1r0_color===rgb(121,252,109)  && c2r0_color===rgb(121,252,109)  && c3r0_color===rgb(121,252,109)  && c4r0_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r0.style.background="yellow";
    c1r0.style.background="yellow";
    c2r0.style.background="yellow";
    c3r0.style.background="yellow";
    c4r0.style.background="yellow";
  }

  else  if(c0r1_color==="red" && c1r1_color===rgb(121,252,109)  && c2r1_color===rgb(121,252,109)  && c3r1_color===rgb(121,252,109) && c4r1_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r1.style.background="yellow";
    c1r1.style.background="yellow";
    c2r1.style.background="yellow";
    c3r1.style.background="yellow";
    c4r1.style.background="yellow";
  }
  else  if(c0r2_color==="red" && c1r2_color===rgb(121,252,109) && c2r2_color===rgb(121,252,109)  && c3r2_color===rgb(121,252,109)  && c4r2_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r2.style.background="yellow";
    c1r2.style.background="yellow";
    c2r2.style.background="yellow";
    c3r2.style.background="yellow";
    c4r2.style.background="yellow";
  }

  else  if(c0r3_color==="red" && c1r3_color===rgb(121,252,109)  && c2r3_color===rgb(121,252,109) && c3r3_color===rgb(121,252,109) && c4r3_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r3.style.background="yellow";
    c1r3.style.background="yellow";
    c2r3.style.background="yellow";
    c3r3.style.background="yellow";
    c4r3.style.background="yellow";
  }

  else  if(c0r4_color===rgb(121,252,109) && c1r4_color===rgb(121,252,109) && c2r4_color===rgb(121,252,109)  && c3r4_color===rgb(121,252,109) && c4r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r4.style.background="yellow";
    c1r4.style.background="yellow";
    c2r4.style.background="yellow";
    c3r4.style.background="yellow";
    c4r4.style.background="yellow";
  }

  //check if bingo winner is by diagonal

  else  if(c0r0_color===rgb(121,252,109) && c1r1_color===rgb(121,252,109)  && c2r2_color===rgb(121,252,109)  && c3r3_color===rgb(121,252,109)  && c4r4_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r0.style.background="yellow";
    c1r1.style.background="yellow";
    c2r2.style.background="yellow";
    c3r3.style.background="yellow";
    c4r4.style.background="yellow";
  }
  else  if(c0r4_color===rgb(121,252,109) && c1r3_color==rgb(121,252,109)  && c2r2_color===rgb(121,252,109)  && c3r1_color===rgb(121,252,109)  && c4r0_color===rgb(121,252,109)){
    BingoWinner=true;

    c0r4.style.background="yellow";
    c1r3.style.background="yellow";
    c2r2.style.background="yellow";
    c3r1.style.background="yellow";
    c4r0.style.background="yellow";
  }
  else{
    console.log("No winnners yet")
  }




}
function showWinnerCard(){
var confirmation=confirm("there is a bingo winner!")
if(confirmation!==true){
  clearCards()
}
}
function clearCards(){
  var confirmation=confirm("do you want to clear your cards and reset the cards")
  if(confirmation===true){
    window.location.reload()
  }
}