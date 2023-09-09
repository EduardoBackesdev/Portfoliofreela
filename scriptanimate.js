// efeitos de foto

window.sr = ScrollReveal ({reset: true});
sr.reveal('.foto', {rotate: {x:0, y: 80, z:0}, duration: 2000});
sr.reveal('.h2acao', {rotate: {x:80, y: 0, z:0}, duration: 2000});
sr.reveal('.pacao', {rotate: {x:0, y: 80, z:0}, duration: 2000});
sr.reveal('.buttonacao', {rotate: {x:0, y: 80, z:0}, duration: 2000});

// efeitos de escrever

function escrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML= ''
    textoArray.forEach((letra,i) => {
        setTimeout(function(){elemento.innerHTML += letra;}, 80 * i)
    });
}

const titulo = document.querySelector('.titulo');
escrever(titulo);