# CLI-todo

A **simple and efficient command-line interface (CLI) application** for managing your to-do tasks.  
Built using **Node.js**, it provides essential task management operations like adding, listing, marking complete, and deleting tasks — all from your terminal!

---

## ✨ Features

- **Add Tasks**: Instantly add a new task to your list.
- **View Tasks**: List all your pending and completed tasks clearly.
- **Mark as Completed**: Update any task's status to completed.
- **Delete Tasks**: Remove specific tasks by ID.
- **Persistent Storage**: Tasks are saved locally in a `todos.json` file.
- **Colorful Output**: Uses `chalk` for enhanced visual feedback in the terminal.
- **Error Handling**: Gracefully handles file reading/writing issues.
- **Auto Reindexing**: After deletion, IDs are automatically reordered for clarity.

---

## ⚙️ Technologies Used

- **Node.js** – Core platform
- **Commander.js** – For easy CLI command parsing
- **Chalk** – For colorful and readable terminal output
- **fs (File System module)** – For reading and writing JSON data

---

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aerinpatel/CLI-todo.git
   cd CLI-todo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the CLI:

   ```bash
   node index.js
   ```

---

## 📖 Usage

| Command | Description |
|:--------|:------------|
| `node index.js add "<task>"` | Add a new todo task |
| `node index.js list` | List all todo tasks |
| `node index.js check <id>` | Mark a specific task as completed |
| `node index.js delete <id>` | Delete a task by its ID |

---

## 🔥 Highlights of the Code

- **Loading and Saving Todos**:  
  - `loadTodos()` reads `todos.json`. If it fails, it returns an empty array with a friendly error message.
  - `saveTodos(todos)` writes the updated todos array back to the file, ensuring persistence.

- **Adding Tasks**:  
  Adds a new task with an `id`, `task` description, and a default `completed: false`.

- **Listing Tasks**:  
  Displays all tasks, differentiating **completed** and **pending** using colored indicators (`[x]` for done, `[ ]` for pending).

- **Marking Completed**:  
  Updates the `completed` flag of a task based on its ID.

- **Deleting Tasks**:  
  Deletes a task by ID, and **reindexes** all subsequent tasks to maintain a neat ID sequence.

- **Program Setup**:  
  Configured with `.name()`, `.description()`, and `.version()` using **Commander.js** for a professional CLI feel.

---

## 📂 Project Structure

```bash
CLI-todo/
│
├── index.js        # Main CLI application file
├── todos.json      # Stores tasks persistently
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

---

## 📋 Example

```bash
$ node index.js add "Finish homework"
Todo added: "Finish homework"

$ node index.js list
Your Todos:
1. [ ] Finish homework

$ node index.js check 1
Todo 1 marked as completed.

$ node index.js list
Your Todos:
1. [x] Finish homework

$ node index.js delete 1
Todo with ID 1 deleted.
```

---

## 🙌 Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request!

---

Would you also like me to create badges (like `npm version`, `License`, etc.) and a small demo GIF for this CLI? 🚀  
It would make your README look even more professional! 🎯  
Let me know!
