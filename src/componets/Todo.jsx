import propTypes from 'prop-types'
import { MdDeleteForever, MdDoneOutline } from 'react-icons/md'

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        opacity: todo.isCompleted ? '.3' : ''
      }}
      className="m-1 bg-white my-3 rounded-2 p-2 d-flex justify-content-between align-items-center"
    >
      <div style={{ width: '230px' }} className="overflow-hidden">
        <span className="fs-6 fw-bold"> {todo.text} </span>
        <span style={{ fontSize: '14px' }} className="fst-italic ms-1">
          ({todo.category})
        </span>
      </div>
      <div>
        <button
          className="btn btn-outline-success me-1"
          onClick={() => completeTodo(todo.id)}
        >
          <abbr title="confirm">
            <MdDoneOutline />
          </abbr>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => removeTodo(todo.id)}
        >
          <abbr title="delete">
            <MdDeleteForever />
          </abbr>
        </button>
      </div>
    </div>
  )
}

export default Todo
Todo.propTypes = {
  todo: propTypes.shape({}),
}.isRequired
