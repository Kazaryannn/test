import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodosItem from './TodosItem'

const todosList = () => {
    let todos = useSelector((state) => state.app);
    console.log('todos', todos);
  return (
    <div className='my-3'>
      {
        todos.map((todo) => {
          return <TodosItem key={todo.id} todo={todo} />
        })
      }
    </div>
  )
}

export default todosList