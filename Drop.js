const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hidden'),0)
}

for(let i = 0; i < placeholders.length;i++)
{
    placeholders[i].addEventListener('dragover',dragover)
    placeholders[i].addEventListener('dragenter',dragenter)
    placeholders[i].addEventListener('dragleave',dragleave)
    placeholders[i].addEventListener('drop',dragdrop)
}
function dragend(event){
    event.target.classList.remove('hold','hidden')
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hovered')
}

function dragleave(event){
   event.target.classList.remove( 'hovered')
}

function dragdrop(event){
    event.target.classList.remove( 'hovered')
    event.target.append(item)
}