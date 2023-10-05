import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '@/redux/app.actions'
import { Button, Input } from 'antd'

const todoInput = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    dispatch(addTodo({
      id: Math.random(),
      name: name
    }))
    setName('')
  }
  return (
    <div>
      <div className="input-box">
        <Input
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <Button type='primary' onClick={handleAddTodo} className='btn'>
          Add
        </Button>
      </div>
    </div>
  )
}

export default todoInput