var c = document.getElementById('canvasHouse');
var ctx = c.getContext("2d");

function rect(ctx, x, y, w, h){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y+h);
  ctx.lineWidth = w;
  ctx.stroke();
  return ctx;
}
function rotate(ctx, deg){
  ctx.rotate(deg*Math.PI/180);
  return ctx;
}

// Toiture maison
rotate(ctx, 45);
ctx.strokeStyle = "#D7823E";
rect(ctx, 190, -100, 180, 180);
rotate(ctx, -45);

// Murs de la maison
ctx.strokeStyle = "#A1D8E6";
rect(ctx, 141, 127, 253, 250);

// fenetre haut gauche
ctx.strokeStyle = "#C9C9C9";
rect(ctx, 60, 150, 50, 50);

// fenetre haut droit
ctx.strokeStyle = "#C9C9C9";
rect(ctx, 60+160, 150, 50, 50);

// porte de la maison
ctx.strokeStyle = "#C9C9C9";
rect(ctx, 60+80, 295, 60, 80);
