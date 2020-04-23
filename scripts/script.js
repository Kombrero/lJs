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

    //localStorage.setItem('todosData', JSON.stringify(todoData));
    
    //let obj = JSON.parse(localStorage.todosData);
    //console.log(obj);
    console.log(todoData);


    todoData.forEach(function(item, i){
        //localStorage.setItem('elem', JSON.stringify(item));
        //let obj = localStorage.getItem('elem', JSON.stringify(item));
       // let els = JSON.parse(localStorage.elem);

        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.values + '</span>' + 
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>' ; 
        i = todoData.indexOf(item);
        
        //console.log(i);
            
        if(item.completed) {
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }


        const tFalse = function() {

            if(item.completed){
                todoData.splice(i, 1);
                todoData.push(item);
                localStorage.setItem('todosData', JSON.stringify(todoData));
                console.log(todoData);
                render(); 
            }else{
               
                todoData.splice(i, 1);
                todoData.push(item);
                localStorage.setItem('todosData', JSON.stringify(todoData));
                console.log(todoData);
               
                render();
            }
          
        }; 
            
               
            
        
       
        const todoComplete = li.querySelector('.todo-complete');

        todoComplete.addEventListener('click', function(){
            console.log(item.completed);
            item.completed = !item.completed;
            console.log(item);
            tFalse();
            render();
            }
            
        )

        

        const todoRemove = li.querySelector('.todo-remove');

        todoRemove.addEventListener('click', function(){
            todoData.splice(i, 1); 
            //obj.splice(i, 1);
            localStorage.setItem('todosData', JSON.stringify(todoData));
            //console.log(obj); 
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
   
    let y = localStorage.getItem('todosData');
    console.log(y);
    if(y !== null){
        let r = JSON.parse(localStorage.todosData);
        r.forEach((item)=>{
            todoData.push(item);
        })
        render()
        console.log(todoData);
    }else{
        render();
    }
//
// render();