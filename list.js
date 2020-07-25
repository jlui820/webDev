let todos = ['buy new turtle'];

let input = prompt('What would you like to do?');




while (input !== 'quit') {
  if (input === 'list') {
    console.log(todos);
  } else if (input === 'new') {
    let newTodo = prompt('Enter new Todo');
    todos.push(newTodo);
  }


  input = prompt('What would you like to do?');
}

console.log('ok you quit')