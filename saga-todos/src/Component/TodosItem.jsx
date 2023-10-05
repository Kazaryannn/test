import React, { useState } from 'react'
import { deleteTodo } from '@/redux/app.actions'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { updateTodo } from '@/redux/app.actions'

const todosItem = ({ todo }) => {
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(todo.name)
  const dispatch = useDispatch()
  return (
    <div className='item-box'>
      <div>#{Math.trunc(todo.id * 10)}</div>
      <div className="col-8">
        {
          edit ? (
            <input type='text' onChange={(e) => setName(e.target.value)} className='form-control' value={name} />
          ) : (
            <h4>{todo.name}</h4>
          )
        }
      </div>
      <div className="btn2">
        <Button onClick={() => {
          if(edit) {
            setName(todo.name)
            dispatch(updateTodo({
              ...todo,
              name: name
            }))
          }
          setEdit(!edit)
          }} type='primary' className='add'>{edit ? 'Update' : "Edit"}</Button>
        <Button type='primary' onClick={() => dispatch(deleteTodo({ id: todo.id }))} danger>
          Delete
        </Button>
      </div>

    </div>

  )
}

export default todosItem