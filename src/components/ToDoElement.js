import { useContext } from 'react'
import TodoContext from '../utils/TodoContext';

const ToDoElement = ({todo}) => {
  const {todos, setTodos} = useContext(TodoContext);
  return (
    <div className="flex justify-between p-2 border-b hover:bg-slate-200 hover:shadow-md duration-100">
      <div className='flex items-center m-2'>
        <input className="w-4 h-4 hover:scale-150 duration-200" type="checkbox" checked={todo.completed} onChange={
          () => {
            setTodos(todos.map((t) => {
              if(t.id===todo.id){
                return {
                  ...t,
                  completed: !t.completed
                }
              }
              return t;
            }))
          }
        } />
        <p className="mx-2 " >{todo.id}</p>
        <p>{todo.task}</p>
      </div>
      <button className="px-4 py-2 rounded bg-slate-300 hover:bg-red-600  hover:text-white hover:scale-110 duration-200" onClick={
        () => {
          setTodos(todos.filter((t) => t.id!==todo.id));
        }
      }>Delete</button>
    </div>
  )
}

export default ToDoElement