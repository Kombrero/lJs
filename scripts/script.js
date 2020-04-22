'use strict'

let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerButton = document.querySelector('.header-button'),
    textTodo = document.querySelector('.text-todo');

let todoData = [];
console.log(todoData);


let render = function(){

    todoList.textContent = '';
    todoCompleted.textContent = '';

    localStorage.setItem('todosData', JSON.stringify(todoData));
    
    let obj = JSON.parse(localStorage.todosData);
    console.log(obj);


    obj.forEach(function(item, i){
        localStorage.setItem('elem', JSON.stringify(item));
        //let obj = localStorage.getItem('elem', JSON.stringify(item));
        let el = JSON.parse(localStorage.elem);

        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + el.values + '</span>' + 
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>' ; 
        console.log(el);
        i = obj.indexOf(item);
        
        //console.log(i);
            
        if(el.completed) {
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }
       
        const todoComplete = li.querySelector('.todo-complete');

        todoComplete.addEventListener('click', function(){
            console.log(el.completed);
            el.completed = !el.completed;
            console.log(el);

            if(el.completed === true) {
                todoCompleted.append(li);
                todoData.splice(el, 1)
                todoData.push(el);
                localStorage.setItem('todosDataComplete', JSON.stringify(todoData));
                localStorage.removeItem('todosData', JSON.stringify(todoData));
            }else{
                todoList.append(li);
                todoData.splice(el, 1)
                todoData.push(el);
                localStorage.removeItem('todosDataComplete', JSON.stringify(todoData));
                localStorage.setItem('todosData', JSON.stringify(todoData));
            }
            return el.completed;
            //render();
        })

        

        const todoRemove = li.querySelector('.todo-remove');

        todoRemove.addEventListener('click', function(){
            todoData.splice(i, 1); 
            obj.splice(i, 1);
            localStorage.setItem('todosData', JSON.stringify(obj));
            console.log(obj); 
            li.remove(li); 
            render(); 
        })

        
          
    });

    
};

todoControl.addEventListener('submit', function(event){
    
    if(headerInput.value.trim() === ''){
       event.preventDefault();
    }else{
        console.log(todoData);
        event.preventDefault();
            const newTodo = {
                values: headerInput.value,
                completed: false
                
        }

        console.log(todoData);
        todoData.push(newTodo);
        localStorage.setItem('todosData', JSON.stringify(todoData));
        localStorage.getItem('todosData', JSON.stringify(todoData));
        
        };
        
        console.log(todoData);

        headerInput.value = '';
        

        render();
    })
   


render();