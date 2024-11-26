const fs = require('fs');
const { Command } = require('commander');
const chalk = require('chalk');
const program = new Command();

// Helper to load todos from the file
function loadTodos() {
  try {
    const data = fs.readFileSync('todos.json', 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.log(chalk.red('Error loading todos:', error.message));
    return [];
  }
}

// Helper to save todos to the file
function saveTodos(todos) {
  try {
    fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
  } catch (error) {
    console.log(chalk.red('Error saving todos:', error.message));
  }
}

// Command-line interface setup
program
  .name('todo-applit')
  .description('A simple CLI for managing todos')
  .version('1.0.0');

// Add a new todo
program
  .command('add <todo>')
  .description('Add a new todo')
  .action((todo) => {
    const todos = loadTodos();
    todos.push({ id: todos.length + 1, task: todo, completed: false });
    saveTodos(todos);
    console.log(chalk.green(`Todo added: "${todo}"`));
  });

// List all todos
program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log(chalk.yellow('No todos found.'));
    } else {
      console.log(chalk.cyan('Your Todos:'));
      todos.forEach((todo) => {
        const status = todo.completed ? chalk.green('[x]') : chalk.red('[ ]');
        console.log(`${todo.id}. ${status} ${todo.task}`);
      });
    }
  });

// Mark a todo as completed
program
  .command('check <id>')
  .description('Mark a todo as completed')
  .action((id) => {
    const todos = loadTodos();
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.completed = true;
      saveTodos(todos);
      console.log(chalk.green(`Todo ${id} marked as completed.`));
    } else {
      console.log(chalk.red(`Todo with ID ${id} not found.`));
    }
  });

// Delete a specific todo
program
  .command('delete <id>')
  .description('Delete a todo by ID')
  .action((id) => {
    let todos = loadTodos();
    const initialLength = todos.length;
    todos = todos.filter((t) => t.id !== parseInt(id));

    if (todos.length < initialLength) {
      // Re-index todos after deletion
      todos = todos.map((todo, index) => ({ ...todo, id: index + 1 }));
      saveTodos(todos);
      console.log(chalk.green(`Todo with ID ${id} deleted.`));
    } else {
      console.log(chalk.red(`Todo with ID ${id} not found.`));
    }
  });

// Parse command-line arguments
program.parse();
