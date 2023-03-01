function cambioColor(){
    document.getElementById('nombre').style.color='#20262E';
}
function vuelveColor(){
    document.getElementById('nombre').style.color='#E9E8E8';
}
document.getElementById('exp').style.display='none';
function apareceExp(){
    document.getElementById('exp').style.display='block'
    document.getElementById('hab').style.display='none'
}
document.getElementById('hab').style.display='none';
function apareceHab(){
    document.getElementById('hab').style.display='block'
    document.getElementById('exp').style.display='none'
}

// onmouseover="style.color='#20262E'" onmouseout="style.color='#E9E8E8'"//