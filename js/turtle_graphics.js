//タートルグラフィックの描画（角度と距離による描画）
// 変数宣言
var canvas_turtle = document.getElementById('turtle');
var ctx_turtle = canvas_turtle.getContext('2d');
var canvas_size = 600
canvas_turtle.width = canvas_size;
canvas_turtle.height = canvas_size;
canvas_turtle.style.border = "solid 2px";
var turtle_x = 0; // キャンバス中央の原点からの座標変位
var turtle_y = 0; // キャンバス中央の原点からの座標変位
var turtle_angle = 0; // 角度
var turtle_distance = 0; // 距離

// 現在位置からturtle_angleの角度にturtle_distanceの距離だけ進む直線を描画する関数の宣言
function turtle_draw(){
	ctx_turtle.beginPath(); // 描画座標のリセット
	ctx_turtle.moveTo( ( canvas_size / 2 ) + turtle_x , ( canvas_size / 2 ) + turtle_y ); // 起点を設定
	turtle_x += turtle_distance * Math.cos( ( 2 * Math.PI ) * ( turtle_angle / 360 ) ); // 座標変位の更新
	turtle_y -= turtle_distance * Math.sin( ( 2 * Math.PI ) * ( turtle_angle / 360 ) ); // 座標変位の更新
	ctx_turtle.lineTo( ( canvas_size / 2 ) + turtle_x , ( canvas_size / 2 ) + turtle_y ); // 直線を引くための行先座標をセット
	ctx_turtle.stroke(); // 直線の描画
}

// turtle_distanceとturtle_drawの処理を変えていろいろな軌跡を描くことができる。

// 正方形
for (var n=1; n<=4; n+=1){
	turtle_distance = 100;
	turtle_draw(); // 描画呼び出し
	turtle_angle += 90;
} 

// 渦巻き
for (n=1; n<=360; n+=0.1){
	turtle_distance = n;
	turtle_angle += (360/(n*10.0));
	turtle_draw(); // 描画呼び出し
} 