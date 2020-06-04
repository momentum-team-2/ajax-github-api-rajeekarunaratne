/* eslint-disable prefer-const, no-unused-vars */
/* globals fetch */
{/* <h4><span class="key">Name:</span> <span class="content">blah blah</span></h4> */}


let url = 'https://api.github.com/users/rajeekarunaratne'

let nameHeader = document.querySelector('#main-name')
let basicsElem = document.querySelector(".basics")
let storyElem = document.querySelector(".story")
let imgElem = document.querySelector(".img")
fetch(url)
    .then(function (response) {
        console.log(response)
        return(response.json())

    })
    .then(function (data) {
        nameHeader.innerText = data.name
        let nameElem = document.createElement('h4')
        nameElem.innerHTML = '<span class="key">Name:</span>  <span class="content">' + data.name + '</span>'
        basicsElem.appendChild(nameElem)
        let gitElem = document.createElement('h4')
        gitElem.innerHTML = '<span class="key">GitHub URL:</span>  <span class="content underline">' + data.login + '</span>'
        basicsElem.appendChild(gitElem)
        let bioElem = document.createElement('h4')
        bioElem.innerHTML = '<span class="content">' + data.bio + '</span>'
        storyElem.appendChild(bioElem)
        let img = document.createElement('img')
        img.setAttribute('src', data.avatar_url)
        img.setAttribute('class','br-100')
        imgElem.appendChild(img)
    })
