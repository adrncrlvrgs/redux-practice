import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos =  useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        <ul key={todos.id} className='list-none'>
        {
        todos.map((todo)=>(
           
                <li className='mt-4 flex justify-between items-center
                bg-zinc-800 px-4 py-2 rounded'
                key={todo.id}
                >
                    <div>{todo.text}</div>
                    <button
                        onClick={() => dispatch(removeTodo(todo.id)) }
                    >
                    <svg fill="#ee1717" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
                    </button>
                </li>
            
        ))}
        </ul>
    </>
    
  )

}

export default Todos