import { Request, Response } from "express";
import { Todo } from "../models/todo";
const Todos: Todo[] = [
    { id: 1, task: 'Learn TypeScript', completed: false },
    { id: 2, task: 'Build a Node.js app', completed: false },
    { id: 3, task: 'Deploy to production', completed: false },
    { id: 4, task: 'Write tests', completed: false },
    { id: 5, task: 'Refactor code', completed: false },
    { id: 6, task: 'Update documentation', completed: false },
    { id: 7, task: 'Add logging', completed: false },
    { id: 8, task: 'Implement CI/CD', completed: false },
    { id: 9, task: 'Optimize performance', completed: false },
    { id: 10, task: 'Conduct code review', completed: false },
    { id: 11, task: 'Prepare for deployment', completed: false },
    { id: 12, task: 'Monitor application', completed: false }
]

export const getTodos = (req: Request, res: Response) => {
    res.json({
        msg: 'List of todos',
        todos: Todos
    });
};

export const getTodoById = (req: Request, res: Response) => {  
 const todo = Todos.find(t => t.id === parseInt(req.params.id));
  if (todo) {
    res.status(200).json({
      msg: 'Todo found',
      todo
    });
  } else {
    res.status(404).json({
      msg: 'Todo not found'
    });
  }
}

export const createTodo = (req: Request, res: Response) => {
  const task = req.body.task;
  const newTodo = {
    id: Todos.length + 1,
    task,
    completed: false
  }
  Todos.push(newTodo);
  res.status(201).json({
    msg: "Todo created",
    todo: newTodo
  })
}

export const updateTodo = (req: Request, res: Response) => {
  const todo = Todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ msg: 'Todo not found' });
  }

  const { task, completed } = req.body;
  todo.task = task;
  todo.completed = completed;

  res.status(200).json({ msg: 'Todo updated', todo });
};

export const deleteTodo = (req: Request, res: Response) => {
    const todo = Todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ msg: 'Todo not found' });
    }

    Todos.splice(Todos.indexOf(todo), 1);
    res.status(200).json({ msg: 'Todo deleted', todo });
};

