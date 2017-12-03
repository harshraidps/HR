var play=1;
var click1,click2,click3,click4,click5,click6,click7,click8,click9;
var b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,b7=0,b8=0,b9=0;
var bcc=0;
var bccc=0;
var player1="PLAYED WELL",player2=" PLAYED WELL";

	
	
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
	go();bccChange();
if(b1==1 && b2==2 && b3==3){
alert("win X: "+player1);winRef();
}
else if(b1==1 && b5==5 && b9==9){
alert("win X: "+player1);winRef();
}
else if(b3==3 && b5==5 && b7==7){
alert("win X: "+player1);winRef();
}
else if(b1==1 && b4==4 && b7==7){
alert("win X: "+player1);winRef();
}
else if(b3==3 && b6==6 && b9==9){
alert("win X: "+player1);winRef();
}
else if(b7==7 && b8==8 && b9==9){
alert("win X: "+player1);winRef();
}
else if(b2==2 && b5==5 && b8==8){
alert("win X: "+player1);winRef();
}
else if(b4==4 && b5==5 && b6==6){
alert("win X: "+player1);winRef();
}

else if(b1==-1 && b2==-2 && b3==-3){
alert("win O:"+player2);winRef();
}
else if(b1==-1 && b5==-5 && b9==-9){
alert("win O:"+player2);winRef();
}
else if(b3==-3 && b5==-5 && b7==-7){
alert("win O:"+player2);winRef();
}
else if(b1==-1 && b4==-4 && b7==-7){
alert("win O:"+player2);winRef();
}
else if(b3==-3 && b6==-6 && b9==-9){
alert("win O:"+player2);winRef();
}
else if(b7==-7 && b8==-8 && b9==-9){
alert("win O:"+player2);winRef();
}
else  if(b2==-2 && b5==-5 && b8==-8){
alert("win O:"+player2);winRef();
}
else if(b4==-4 && b5==-5 && b6==-6){
alert("win O:"+player2);winRef();
}
}
function winRef() {
	alert("GAME IS GOING TO RESTART");
    document.getElementById('1').src = 'def.jpg';
    document.getElementById('2').src = 'def.jpg';
    document.getElementById('3').src = 'def.jpg';
    document.getElementById('4').src = 'def.jpg';
    document.getElementById('5').src = 'def.jpg';
    document.getElementById('6').src = 'def.jpg';
    document.getElementById('7').src = 'def.jpg';
    document.getElementById('8').src = 'def.jpg';
    document.getElementById('9').src = 'def.jpg';
	document.getElementById("cbo").style.backgroundColor='white'
	document.getElementById("cbx").style.backgroundColor='white';
	play=1;
	b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,b7=0,b8=0,b9=0;
	click1=0,click2=0,click3=0,click4=0,click5=0,click6=0,click7=0,click8=0,click9=0,bcc=0,bccc=0;
	
}
function winRefTotal(){
    location.replace('https://harshraidps.github.io/hr/game3t.html');
}
function ChangeToX(){
	if(bcc==1){}
	else{
	play=1;	
		document.getElementById("cbx").style.backgroundColor='red';
	document.getElementById("cbo").style.backgroundColor='white';
	}
	
}
function ChangeToO(){
	if(bcc==1){}
	else{
	play=2;	
	document.getElementById("cbo").style.backgroundColor='red';
	document.getElementById("cbx").style.backgroundColor='white';
	}
}

function bccChange(){
if(bccc!=1){bcc=1;bccc=1;}
}


