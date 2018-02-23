var l = 0;
var P = 3.14;
var r = Number(prompt("Введите радиус круга:"));
 l = 2*P*r;
 S = P*Math.pow(r,2);
 document.write("Длина круга:" + (l).toFixed(1) +"<br />");
 document.write("Площадь круга:" + (S).toFixed(1));
