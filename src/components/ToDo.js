import { useState } from 'react'
import ToDoElement from './ToDoElement';
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from 'notistack';
import { useContext } from 'react';
import TodoContext from '../utils/TodoContext';

const ToDoConatiner = ({name, todos}) => {
  return(
    <div className="flex flex-col mb-3 border rounded-xl">
    <p className='p-4 bg-slate-400 '>{name} {todos?.length}</p>
    {
      todos.length!==0 ? (todos.map((todo) => <ToDoElement key={todo.id} todo={todo}/>)) : <p className="p-5">No Task Available</p>
    }
    </div>
  )
}

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const {todos, setTodos} = useContext(TodoContext);
  const completedTasks = todos.filter((t) => t.completed);
  const pendingTasks = todos.filter((t) => !t.completed);
  return (
    <div className="px-4 py-2 m-5 flex-1">
        <div className="px-4 py-2 mb-2 border rounded-lg flex justify-between top-0 sticky bg-white shadow-md items-center hover:bg-slate-100">
          <p>Task: </p>
          <input value={todo} onChange={
            (e) => {
              setTodo(
                e.target.value
              )
            }
          } className="bg-inherit border-0 w-11/12 m-2 focus:outline-none border-b border-b-slate-600 mr-2" type="text" placeholder="  Type your task here" />
          <SnackbarProvider action = {(snackbarId)=><button onClick={() => { closeSnackbar(snackbarId) }}>Dismiss</button>}/>
          <button className="px-4 py-2 rounded bg-slate-300 hover:bg-green-400 hover:text-white hover:scale-110 duration-150" onClick={
            () => {
              todo.length<=0 ? enqueueSnackbar('Task Cannot be Empty',{ variant: 'error' }): 
              setTodos([...todos, {id:todos.length+1, task:todo, completed:false}]);
            }
          }>Add</button>
      </div>
      <ToDoConatiner name="Pending" todos={pendingTasks}/>
      <ToDoConatiner name="Completed" todos={completedTasks}/>
    </div>
  )
}

export default ToDo