$(window).mousemove(function(e){
    let x = e.pageX;
    let y = e.pageY;
    $('#circle').offset({top: y, left: x});
});