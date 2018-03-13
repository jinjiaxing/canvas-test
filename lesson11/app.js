/**
 * 初次使用zrender
 */
window.onload = function(){
    var zr = zrender.init(document.getElementById('main'));
    var circle = new zrender.Circle({
        shape: {
            cx: 40,
            cy: 40,
            r: 40
        },
        style: {
            fill: '#F00',
            stroke: '#F00'
        }
    });
    console.log('circle=',circle);
    zr.add(circle);

    var t= 40;

    var step = function() {
        t = t +1;
        console.log(t);
        circle.attr('shape', {
            r:  t,
            cx: t,
            cy: t

        });

        requestAnimationFrame(step);
    };
    step();

};



