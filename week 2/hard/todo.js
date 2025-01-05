/* Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
        this.todo=[];
    }
    
    add(str1){
        this.todo.push(str1)
    }
    
    remove(indexOfTodo){
        if(0>indexOfTodo && indexOfTodo<this.todo.length){
            this.todo.splice(indexOfTodo,1)
        }
        else{
            console.log("invalid Index")
        }
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;  // Update the todo at the specified index
        } else {
          console.log('Invalid index');
        }
      }
    
    getAll(){
        return this.todo
    }

    get(indexOfTodo){
        if(indexOfTodo>0 && indexOfTodo<this.todo.length){
            return this.todo[indexOfTodo];
        }
    }

    clear(){
        this.todo=[];
        
    }

}

module.exports = Todo;