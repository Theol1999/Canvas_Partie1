var c = document.getElementById('house');
var ctx = c.getContext('2d');

//toit:
ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(200,50);
ctx.lineTo(250,100);
ctx.lineTo(150,100);
ctx.closePath();
ctx.fillStyle = '#D7823E';
ctx.fill();
ctx.stroke();

//Mur :
ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(250,100);
ctx.lineTo(250,200);
ctx.lineTo(150,200);
ctx.lineTo(150,100);
ctx.closePath();
ctx.fillStyle = '#A1D8E6';
ctx.fill();
ctx.stroke();

//porte
ctx.beginPath();
ctx.moveTo(190,200);
ctx.lineTo(210,200);
ctx.lineTo(210,170);
ctx.lineTo(190,170);
ctx.lineTo(190,200);
ctx.closePath();
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.stroke();

//fenêtre 1:
ctx.beginPath();
ctx.moveTo(160,110);
ctx.lineTo(180,110);
ctx.lineTo(180,130);
ctx.lineTo(160,130);
ctx.lineTo(160,110);
ctx.closePath();
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.stroke();

//fenêtre 2:
ctx.beginPath();
ctx.moveTo(220,110);
ctx.lineTo(240,110);
ctx.lineTo(240,130);
ctx.lineTo(220,130);
ctx.lineTo(220,110);
ctx.closePath();
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.stroke();
