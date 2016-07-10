window.onload = function () {
    var canvas = document.getElementById('canvas');
    // 调用canvas 2d接口
    var context = canvas.getContext('2d');
    // 绘制三角形
    context.moveTo(100,100);
    context.lineTo(700,700);
    context.lineTo(700,100);
    context.lineTo(100,100);
    // 样式
    // 最后描边


    context.fillStyle = 'rgb(2,100,30)';
    context.fill();

    context.lineWith = 20;
    context.strokeStyle = 'red';
    context.stroke();

    
};