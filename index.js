let again = document.getElementById("reader");
again.addEventListener('click',()=>{
    document.querySelectorAll('.cards').forEach(e =>{
        e.classList.remove('bg');
    })
    document.querySelectorAll('.dot').forEach(e =>{
        e.classList.remove('dot');
    })
    document.querySelector(".number").innerHTML=0
})