var play=1;
var click1,click2,click3,click4,click5,click6,click7,click8,click9;
var b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,b7=0,b8=0,b9=0;
var player1,player2;
function name(){
player1=prompt("Enter the name of Player with CROSS as a Symbol");
player2=prompt("Enter the name of Player with ZERO as a Symbol");
}
function button1(){
if(click1>=1){return;}
else{ 
   if(play%2!=0){
   play=play+1;
   b1=1;
   document.getElementById('1').src='cross.png'; 
   }
   else if(play%2==0){
    b1=-1;
	play=play+1;
   document.getElementById('1').src='circle.png'; 
   }
   click1=1;
   win();
   }
}
function button2(){ 
if(click2>=2){return;}
else{
   if(play%2!=0){
   play=play+1;
   b2=2;
   document.getElementById('2').src='cross.png';   
   }
   else if(play%2==0){
    play=play+1;
	b2=-2;
   document.getElementById('2').src='circle.png'; 
   }
   click2=2;
   win();
   }
}
function button3(){ 
if(click3>=3){return;}
else{   
   if(play%2!=0){
   play=play+1;
   b3=3;
   document.getElementById('3').src='cross.png'; 
   }
   else if(play%2==0){
    play=play+1;
	b3=-3;
   document.getElementById('3').src='circle.png'; 
   }
    click3=3;
	win();
   }
}
function button4(){ 
if(click4>=4){return;}
else{
   if(play%2!=0){
   play=play+1;
   b4=4;
   document.getElementById('4').src='cross.png';
   }
   else if(play%2==0){
    play=play+1;
	b4=-4;
   document.getElementById('4').src='circle.png'; 
   }
    click4=4;
	win();
   }
}
function button5(){ 
if(click5>=5){return;}
else{
   if(play%2!=0){
   play=play+1;
   b5=5;
   document.getElementById('5').src='cross.png'; 
   }
   else if(play%2==0){
    play=play+1;
	b5=-5;
   document.getElementById('5').src='circle.png'; 
   }
    click5=5;
	win();
   }
}
function button6(){ 
if(click6>=6){return;}
else{
   if(play%2!=0){
   play=play+1;
   document.getElementById('6').src='cross.png';
    b6=6;   
   }
   else if(play%2==0){
    play=play+1;
    b6=-6;
   document.getElementById('6').src='circle.png'; 
   }
   click6=6;
   win();
   }
}
function button7(){ 
if(click7>=7){return;}
else{
   if(play%2!=0){
   play=play+1;
   b7=7;
   document.getElementById('7').src='cross.png'; 
   }
   else if(play%2==0){
    play=play+1;
   b7=-7;
   document.getElementById('7').src='circle.png'; 
   }
   click7=7;
   win();
   }
}
function button8(){
 if(click8>=8){return;}
else{
   if(play%2!=0){
   play=play+1;
   b8=8;
   document.getElementById('8').src='cross.png'; 
   }
   else if(play%2==0){
    play=play+1;
   b8=-8;
   document.getElementById('8').src='circle.png'; 
   }
   click8=8;
   win();
   }
}
function button9(){ 
if(click9>=9){return;}
else{
   if(play%2!=0){
   play=play+1;
   b9=9;
   document.getElementById('9').src='cross.png'; 
   }
   else if(play%2==0){
    play=play+1;
   b9=-9;
   document.getElementById('9').src='circle.png'; 
   }
   click9=9;
   win();
   }
}
function go(){
 if(b1==1 && b2==2 && b3==3)
 {
	if( b4==4 && b5==5 && b6==6)
	{
		if( b7==7 && b8==8 && b9==9)
		{
if(b1==-1 && b2==-2 && b3==-3)
 {
	if( b4==-4 && b5==-5 && b6==-6)
	{
		if( b7==-7 && b8==-8 && b9==-9)
		{
		alert("GAME OVER");
		}
	}
 }
		}
	}
 }	
}
function win(){
	go();
if(b1==1 && b2==2 && b3==3){
alert("win Player 1: "+player1);
}
else if(b1==1 && b5==5 && b9==9){
alert("win Player 1: "+player1);
}
else if(b3==3 && b5==5 && b7==7){
alert("win Player 1: "+player1);
}
else if(b1==1 && b4==4 && b7==7){
alert("win Player 1: "+player1);
}
else if(b3==3 && b6==6 && b9==9){
alert("win Player 1: "+player1);
}
else if(b7==7 && b8==8 && b9==9){
alert("win Player 1: "+player1);
}
else if(b2==2 && b5==5 && b8==8){
alert("win Player 1: "+player1);
}
else if(b4==4 && b5==5 && b6==6){
alert("win Player 1: "+player1);
}

else if(b1==-1 && b2==-2 && b3==-3){
alert("win Player 2: "+player2);
}
else if(b1==-1 && b5==-5 && b9==-9){
alert("win Player 2: "+player2);
}
else if(b3==-3 && b5==-5 && b7==-7){
alert("win Player 2: "+player2);
}
else if(b1==-1 && b4==-4 && b7==-7){
alert("win Player 2");
}
else if(b3==-3 && b6==-6 && b9==-9){
alert("win Player 2: "+player2);
}
else if(b7==-7 && b8==-8 && b9==-9){
alert("win Player 2: "+player2);
}
else  if(b2==-2 && b5==-5 && b8==-8){
alert("win Player 2: "+player2);
}
else if(b4==-4 && b5==-5 && b6==-6){
alert("win Player 2: "+player2);
}

}

