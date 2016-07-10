window.onload = function () {
    var canvas = document.getElementById('canvas');
    // 调用canvas 2d接口
    var context = canvas.getContext('2d');
    // 绘制圆形 样式
    context.lineWidth = 5;
    context.strokeStyle = '#058';
    // 绘制圆形的形状

    context.arc(300,300,200,0,1.5*Math.PI);
    context.stroke();



    
};