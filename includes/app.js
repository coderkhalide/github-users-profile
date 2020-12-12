const search_form = document.querySelector('.search_form')
const search_input = document.querySelector('.search_input')

let url = 'https://api.github.com/users/'

search_form.addEventListener('submit', function(e){
    e.preventDefault()
    userData(search_input.value)
})

function userData(username){
    fetch(url + username)
    .then(res => {
        if(res.ok){
            return res.json()
        }else{
            info.innerHTML = 'Something went Wrong :)'
        }
    })
    .then(data => {
        console.log(data)
        let output = `
            <div class="image">
                <img src="${data.avatar_url}" alt="">
            </div>
            <div class="user_data">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul>
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following} <strong>Following</strong></li>
                    <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>
                
                <div class="repo">
                    
                </div>
            </div>
        `
        document.querySelector('.wrapper').innerHTML = `<div class="info"></div>`
        const info = document.querySelector('.info')
        info.innerHTML = output
        let imageWidth = document.querySelector('.image').clientWidth;
        let image = document.querySelector('.image')
        image.style.cssText  = `height: ${imageWidth}px`
        search_input.value = ''

        userRepo(username)
    })
    .catch(error => {
        info.innerHTML = 'Something went Wrong :) <br> Error: ' + error
    })
}

function userRepo(username){
    fetch(url + username + '/repos')
    .then(res => {
        if(res.ok){
            return res.json()
        }else{
            info.innerHTML = 'Something went Wrong :) <br> Maybe you have given a wrong username!'
        }
    })
    .then(data => {
        console.log(data)
        let repos = ''
        for(let i = 0; i < data.length; i++){
            repos += `<a href="${data[i].html_url}">${data[i].name}</a>`
        }
        document.querySelector('.repo').innerHTML = repos
    })
    .catch(error => {
        info.innerHTML = 'Something went Wrong :) <br> Error: ' + error
    })
}

window.addEventListener('resize', function(){
    if(document.querySelector('.image')){
        let imageWidth = document.querySelector('.image').clientWidth;
        let image = document.querySelector('.image')
        image.style.cssText  = `height: ${imageWidth}px`
    }
})