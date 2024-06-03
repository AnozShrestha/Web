let todoList = [
    { title: "Task 1", description: "Description 1", priority: 1, completed: false },
    { title: "Task 2", description: "Description 2", priority: 2, completed: true },
    { title: "Task 3", description: "Description 3", priority: 3, completed: false },
  ];
  
  // Function to add a new object
  function addTodo(title, description, priority, completed) {
    todoList.push({ title, description, priority, completed });
  }
  
  // Function to remove an object at a specified index
  function removeTodo(index) {
    todoList.splice(index, 1);
  }
  
  // Function to update an object at a specified index
  function updateTodo(index, title, description, priority, completed) {
    todoList[index] = { title, description, priority, completed };
  }
  
  // Example usage:
  addTodo("Task 4", "Description 4", 4, false);
  console.log(todoList);
  
  removeTodo(1);
  console.log(todoList);
  
  updateTodo(0, "Task 1 Updated", "Description 1 Updated", 1, true);
  console.log(todoList);