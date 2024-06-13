let listContainer = document.getElementById('list-items');
let inputItem = document.getElementById('inputItem');
function addTask(){
    if(inputItem.value === ''){
        alert("Sorry! Empty String cannot be added !!");
    }
    else{
        let taskItem = document.createElement('li')
        taskItem.textContent = inputItem.value;
        listContainer.appendChild(taskItem);
        let crossMark = document.createElement('span');
        crossMark.textContent = '\u00d7';
        taskItem.appendChild(crossMark);
    }
    inputItem.value = '';
    saveData();
}

listContainer.addEventListener('click' , (ev)=>{
    if(ev.target.tagName == 'LI'){
       ev.target.classList.toggle('completed');
       saveData();
    }
    else if(ev.target.tagName == 'SPAN'){
        ev.target.parentElement.remove();
          saveData();

    }
})
function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('tasks');
}
showData();