const navbar = document.querySelector('.navbar')
window.addEventListener('scroll',(e)=>{
    if(window.scrollY >0){
        navbar.style.backgroundColor ="white" 
        navbar.querySelectorAll('a').forEach((el)=>{
            el.style.color = '#00171F'
        })
        document.querySelector('.navbar-brand h2').classList.remove('text-white')
        console.log(document.querySelector('.navbar-brand h2').style.color  )
    }
    else {
        navbar.style.backgroundColor ="transparent" 
            navbar.querySelectorAll('a').forEach((el)=>{
            el.style.color = '#bee3fd'
        })
    } 
})