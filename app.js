
var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var color3 = document.getElementById('color3').value;

    document.querySelector('.box1').style.backgroundColor = color1;
    document.querySelector('.box2').style.backgroundColor = color2;
    document.querySelector('.box3').style.backgroundColor = color3;
    
});