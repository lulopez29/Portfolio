document.getElementById('menu').addEventListener('click', function () {

    document.getElementById('navega').classList.toggle('mostrar');
})




document.getElementById('boton').addEventListener('click', function () {
    if (document.getElementById('miVideo').paused)
        document.getElementById('miVideo').play();

    else
    document.getElementById('miVideo').pause();

})

