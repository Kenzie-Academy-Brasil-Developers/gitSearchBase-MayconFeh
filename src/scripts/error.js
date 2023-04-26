function erroTryAgain () {
    const button =  document.querySelector('.button__error')

    button.addEventListener('click',()=>{
        location.replace('../../../')
    })
} 
erroTryAgain()