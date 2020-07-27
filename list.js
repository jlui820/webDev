let todos = ['buy new turtle', 'wash the dog'];

let input = prompt('What would you like to do?');


while (input !== 'quit') {
  if (input === 'list') {
    listTodos();
  } else if (input === 'new') {
    addTodo();
  } else if (input === 'delete') {
    deleteTodo();
  }

  input = prompt('What would you like to do?');
}

console.log('All todos done!')

function listTodos(){
  console.log('**********')
  todos.forEach(function (todo, i) {
    console.log(i + ': ' + todo)
  });
  console.log('**********')
}

function addTodo(){
  let newTodo = prompt('Enter new Todo');
  todos.push(newTodo);
  console.log('Added Todo');
}

function deleteTodo(){
  let index = prompt('Enter index of todo to delete');
  todos.splice(index, 1);
}