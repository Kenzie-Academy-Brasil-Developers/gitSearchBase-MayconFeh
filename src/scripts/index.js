function renderProfileOrErro() {
    const input = document.querySelector('#input-name')
    const button = document.querySelector('.button__submit')

    button.addEventListener('click', async () => {
        const getAllData = await fetch(`https://api.github.com/users/${input.value}`, {
            method: 'GET'
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Usuario Não Encontrado')
                }
            })
            .then((data)=>{
                localStorage.setItem("name", data.name);
                localStorage.setItem("login",data.login);
                localStorage.setItem("img", data.avatar_url);
                
                location.replace('src/pages/profile.html')
            })
            .catch(() => {
                location.replace('src/pages/error.html')
            })
    })
}

renderProfileOrErro()