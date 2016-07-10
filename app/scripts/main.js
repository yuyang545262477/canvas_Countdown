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
    context.lineWith = 10;
    context.strokeStyle = '#058';
    // 最后描边
    context.stroke();


    
};