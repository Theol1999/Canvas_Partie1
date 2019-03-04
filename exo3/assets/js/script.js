var c = document.getElementById('canvasCar');
   var ctx = c.getContext("2d");

   function rotate(ctx, deg){
     ctx.rotate(deg*Math.PI/180);
     return ctx;
   }
   function cercle(ctx, x,y, rayon){
     ctx.beginPath();
     ctx.arc(x,y,rayon,0*Math.PI,2*Math.PI);
     ctx.fill();
  }

   // Contour des roues de la voiture
   ctx.fillStyle="#9E9E9E";
   cercle(ctx, 55,300, 52);
   cercle(ctx, 345,300, 52);

   // Plein des roues de la voiture
   ctx.fillStyle="#CDCDCD";
   cercle(ctx, 55,300, 50);
   cercle(ctx, 345,300, 50);


   ctx.fillStyle="#00A551";
   // haut de la voiture
   ctx.fillRect(70,90,260,70);
   // bas de la voiture
   ctx.fillRect(20,160,360,90);
