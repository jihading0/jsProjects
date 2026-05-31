const form = document.querySelector("form");
const input = document.querySelector(".input");
const taskes = document.querySelector(".taskes");


// from LocalStorage START

let oldTodos = JSON.parse(localStorage.getItem("oldTaskes")) || [];

function render() {
    oldTodos.forEach(e => {
        createEle(e.name, e.complete)
    })
}
render()

// from  LocalStorage  END


form.addEventListener("submit" , e => {

    e.preventDefault();

    createEle(input.value , false);
    saveAlleleTask();
    
    input.value = '';

})

function createEle(tValue , complete) {

    let newTask = `
        <div class="d-flex align-items-center justify-content-between w-100 bg-white rounded-2 my-2 text-black p-2">
            <!-- أضفنا كلاس السحب المتغير ليعرف إن كانت المهمة مكتملة سابقاً أم لا -->
            <div class="task ${complete ? 'complete' : ''}" contenteditable="false" id="${Math.floor(Math.random() * 100)}">
                ${tValue}
            </div>
            <div class="d-flex align-items-center buttons">
                <button class="btn px-1  delete "><i class="fa-solid fa-xmark"></i></button>
                <button class="btn px-1  done   "><i class="fa-solid fa-check"></i></button>
                <button class="btn px-1  edit   "><i class="fa-solid fa-pen"></i></button>
            </div>
        </div>    
    `;

    const task = document.createElement("div");
    task.innerHTML = newTask;
    taskes.append(task);

    // End of Added the task and start run the buttons , Buttons in Task
    task.addEventListener("click" , e => {

        const x = e.target.closest('button');
        if (!x) return; 

        if(x.classList.contains("delete")) {
            
            e.target.closest('button').parentElement.parentElement.remove();
            saveAlleleTask()

        } else if (x.classList.contains("done")) {
            
            const done = e.target.closest('button').parentElement.previousElementSibling;
            done.classList.toggle("complete");
            saveAlleleTask()

        } else if (x.classList.contains("edit")) {

            const editing = e.target.closest('button').parentElement.previousElementSibling;
           
            editing.contentEditable = "true";
            editing.focus();

            editing.onblur = () => {
                editing.contentEditable = "false";
                saveAlleleTask()
            }
            editing.onkeypress = (e) => {
                if(e.key === "Enter"){
                    e.preventDefault();
                    editing.contentEditable = "false";
                    saveAlleleTask()
                }
            }
        
        }

        // console.log(e.target.closest('button'))

    })

}

// save ALL .task in todoList Array

function saveAlleleTask() {
    
    const sTask = document.querySelectorAll(".task");
    todoList = [];

    sTask.forEach(e => {
        todoList.push({
            name : e.textContent.trim(),
            complete : e.classList.contains("complete")? true : false
        })
    })

    localStorage.setItem("oldTaskes" , JSON.stringify(todoList));

}