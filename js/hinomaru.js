// canvas(id="hinomaru")に日の丸を描画する
var canvas_hinomaru = document.getElementById('hinomaru');
var context_hinomaru = canvas_hinomaru.getContext('2d');
canvas_hinomaru.width = 40;
canvas_hinomaru.height = 30;
context_hinomaru.fillStyle = 'rgb(255,255,255)'; 
context_hinomaru.fillRect(0,0,canvas_hinomaru.width,canvas_hinomaru.height);
context_hinomaru.strokeStyle = 'rgb(0,0,0)';
context_hinomaru.strokeRect(0,0,canvas_hinomaru.width,canvas_hinomaru.height);
context_hinomaru.fillStyle = 'rgb(255,00,00)'; 
context_hinomaru.arc(canvas_hinomaru.width/2,canvas_hinomaru.height/2,canvas_hinomaru.width/6,Math.PI*0,Math.PI*2,true);
context_hinomaru.fill();  