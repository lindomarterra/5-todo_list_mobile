import propTypes  from 'prop-types'
import { TbSortAscendingLetters, TbSortDescendingLetters } from 'react-icons/tb'

const Filter = ({ filter, setFilter, setSort, search, setSearch }) => {
  return (
    <div>
      <div className="row g-3">
        <div className="col-md-4">
          <h5 className="fst-italic fs-6 text-black-50">status:</h5>
          <select
            style={{ fontSize: '13px' }}
            className="form-control"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>
        <div className="col-md-4">
          <div className="text-md-center">
            <h5 className="fst-italic fs-6 text-black-50">
              alphabetical order:
            </h5>
            <button
              className="btn btn-outline-dark me-1"
              onClick={() => setSort('Asc')}
            >
              <abbr title="AscendingLetters">
                <TbSortAscendingLetters className="fs-5 text-black-50" />
              </abbr>
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => setSort('Desc')}
            >
              <abbr title="DescendingLetters">
                <TbSortDescendingLetters className="fs-5 text-black-50" />
              </abbr>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <h2 className="fs-6 fst-italic text-black-50">search:</h2>
          <input
            style={{ fontSize: '13px' }}
            className="form-control"
            type="text"
            placeholder="type a text..."
            onChange={({target})=> setSearch(target.value) }
            value={search}
          />
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  )
}

export default Filter
Filter.propTypes= {
  filter: propTypes.any
}.isRequired
