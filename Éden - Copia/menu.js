window.addEventListener("scroll", function(){
    let header = document.querySelector('#trasparente-menu')
    header.classList.toggle('rolagem', window.scrollY > 500)
})