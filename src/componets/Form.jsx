import { useState } from 'react'

const Form = ({addTodo}) => {

  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()

    if(!value || !category) return alert('please select some category!!')
    addTodo(value, category)
    setValue('')
    setCategory('')
  }

  return (
    <div className="w-100">
      <h3 className="fs-5 fw-bold text-black-50 ps-1"> create tasks: </h3>
      <form onSubmit={handleSubmit} style={{maxWidth:'600px'}} >
        <input
          onChange={({target})=> setValue(target.value)}
          value={value}
          style={{ fontSize: '13px'}}
          type="text"
          placeholder="type some task"
          className="form-control"
          required
        />
        <select
          style={{ fontSize: '13px' }}
          className="w-100 form-control my-2"
          onChange={({target})=> setCategory(target.value)}
          value={category}
        >
          <option value="">select some category:</option>
          <option value="labor">labor</option>
          <option value="study">study</option>
          <option value="personal">personal</option>
        </select>
        <button className="btn btn-sm btn-outline-success fw-bold">
          create task
        </button>
      </form>

      <hr className="mt-3" />
    </div>
  )
}

export default Form

