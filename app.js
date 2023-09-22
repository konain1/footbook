

const cards = document.querySelector('.cards')
const upload = document.getElementById('upload')
const rightCard = document.getElementsByClassName('right-cards')[0]
// const card = document.querySelectorAll('.card')
// const mycard =document.getElementById('mycard')

// const cir = document.querySelectorAll('.cir')


// const input = document.getElementById('btn')

// input.addEventListener('input',(e)=>{ 
//     let index = e.target
//     console.log(index)
//     card.style.backgroundImage = `url(${URL.createObjectURL(input.files[0])})` 
    
// })

function createCard(){

    // creating Element
    const cardDiv = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')
    const btndiv = document.createElement('div')
    const cir = document.createElement('div')


    // attribute
    input.type = 'file'
    input.id = 'btn'
    input.accept = 'image/*'
    label.htmlFor = 'btn'
    label.innerHTML = 'upload'


    // class & id 
    btndiv.className = 'btndiv'
    cardDiv.className = 'card'
    cir.className = 'cir'



    // append child
    btndiv.appendChild(label)
    btndiv.appendChild(input)
    cardDiv.appendChild(cir)
    cardDiv.appendChild(btndiv)
    rightCard.appendChild(cardDiv)

    // eveneListener
    input.addEventListener('input',()=>{
     cardDiv.style.backgroundImage = `url(${URL.createObjectURL(input.files[0])})` 

    })
   
}

upload.addEventListener('click',createCard)
