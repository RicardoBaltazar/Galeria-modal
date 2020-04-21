let image = document.querySelectorAll('#image');
let modal = document.querySelector('#modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#modalClose');
let srcValue="";

for(let i =0; i<image.length;i++){
    image[i].addEventListener('click',function(){
        
        srcValue = image[i].getAttribute('src');
        modalImg.setAttribute('src', srcValue);
        //comando para acionar a classe modal_active que torna o modal visivel. caso estiver ativeo, ele desativa.
        modal.classList.toggle('modal_active');
    });
    
}
btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});
