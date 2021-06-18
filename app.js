//Основа Drag and Drop основана на событиях
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

//console.log(item)

item.addEventListener('dragstart', dragstart)

function dragstart(event){
    //console.log("drag start", event.target)
    //event.target это item перетаскиваемый
    event.target.classList.add('hold')
    //Элемент пропадает сразу же если мы на него нажали
    //event.target.classList.add('hide')
    //не объясняется
    setTimeout(()=>event.target.classList.add('hide'),0)
}

item.addEventListener('dragend', dragend)

function dragend(event){
    //console.log("drag end")
    //1й вариатн
        //event.target.classList.remove('hold')
        //event.target.classList.remove('hide')
    //2й вариант
    event.target.className = 'item'
}

//Нужно организовать placeholders чтобы вкладывать туда карточку
//Они "добываются" путем query запроса к класу placeholder

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragover(event) {
    //По умолчанию она отменяет поведение,
    //которое позволяет нам перетаскивать элементы
     event.preventDefault()
    
    console.log('drag over')
}
function dragenter(event) {
    //Нам нужно визуально показать куда вкладывать карточку
    event.target.classList.add('hovered')
    console.log('drag enter')
}
function dragleave(event) {
    //Нам нужно убрать куда вкладывать карточку
    event.target.classList.remove('hovered')
    console.log('drag leave')
}
function dragdrop(event) {
    //Сбрасываем елемент и необходимо его переместить в html
    //item в placeholder 2й

    event.target.append(item)
    event.target.classList.remove('hovered')
    console.log('drag drop')
}


