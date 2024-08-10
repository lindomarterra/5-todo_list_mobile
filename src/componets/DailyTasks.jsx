import { useState } from 'react'

import { MdOutlineFilterList } from 'react-icons/md'
import { MdOutlineFilterListOff } from 'react-icons/md'

import Form from './Form'
import Todo from './Todo'
import Filter from './Filter'

const DailyTasks = () => {

  const [offCanvas, setOffCanvas] = useState(false)
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [sort, setSort]=useState('Asc')
  const [search, setSearch]=useState('')

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, // ... spread
      {
        id: Math.floor(Math.random() * 1000), // gera um id aleatório dificilmente será duplicado
        text,
        category,
        isCompleted: false,
      },
    ]
    setTodos(newTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }

  return (
    <div className=" container-md p-0">
      <div
        style={{ backgroundColor: '#ebebeb', minHeight: '100vh' }}
        className="p-2 position-relative"
      >
        <h1 className="text-center fw-bolder mb-4 text-black-50">
          DAILY TASKS
        </h1>
        <button
          className="btn btn-sm btn-outline-secondary position-absolute end-0 top-0 m-1"
          onClick={() => setOffCanvas(!offCanvas)}
        >
          {offCanvas ? <MdOutlineFilterList /> : <MdOutlineFilterListOff />}
        </button>

          {offCanvas ? (
            <Filter
              filter={filter}
              setFilter={setFilter}
              setSort={setSort}
              search={search}
              setSearch={setSearch}
            />
          ) : (
            <Form addTodo={addTodo} />
          )}
          <div style={{height:'500px'}} className='overflow-auto' >
            {todos
              .filter((todo) =>
                todo.text.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) =>
                sort === 'Asc'
                  ? a.text.localeCompare(b.text)
                  : b.text.localeCompare(a.text)
              )
              .filter((todo) =>
                filter === 'all'
                  ? true
                  : filter === 'completed'
                  ? todo.isCompleted
                  : !todo.isCompleted
              )
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              ))}
          </div>
      </div>
    </div>
  )
}

export default DailyTasks
