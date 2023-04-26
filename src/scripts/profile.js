async function getDataStorage() {
    const img = document.querySelector('.avatar-img')
    const name = document.querySelector('.user-name__container>h1')
    const button = document.querySelector('.change-user__button')
    const imgLS = localStorage.getItem('img')
    const nameLS = localStorage.getItem('name')
    const loginLS = localStorage.getItem('login')


    img.src = imgLS
    name.innerHTML = nameLS ? nameLS : loginLS

    const getRepositoryByLS = await fetch(`https://api.github.com/users/${loginLS}/repos`, {
        method: 'GET'
    })
        .then((res) => {
            return res.json()
        })

    console.log(getRepositoryByLS);
    getRepositoryByLS.forEach(element => {
        //name description url
        const textGeneric = 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like'
        const nameRepos = element.name
        const descriptionRepos = element.description ? element.description : textGeneric
        const htmlUrlReops = element.html_url


        renderRepos(nameRepos, descriptionRepos, htmlUrlReops)
    });

    button.addEventListener('click', () => {
        localStorage.clear()
        location.replace('../../../')
    })
}

getDataStorage()

function renderRepos(name, descriptionR, url) {
    const ul = document.querySelector('.repositories__container')

    const li = document.createElement('li')
    const nameR = document.createElement('h2')
    const description = document.createElement('p')
    const button = document.createElement('button')

    li.className = 'repositories'
    button.innerText = 'Repositório'
    nameR.innerText = name
    description.innerText = descriptionR

    ul.appendChild(li)
    li.appendChild(nameR)
    li.appendChild(description)
    li.appendChild(button)

    button.addEventListener('click', () => {
        window.open(url, '_blank')
    })
}