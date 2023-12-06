import './index.css'
import {IoIosSearch} from 'react-icons/io'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    categoryFilter,
    searchRating,
    searchItem,
    clearFilter,
  } = props

  const categoryClick = id => {
    categoryFilter(id)
  }
  const ratingFilter = id => {
    searchRating(id)
  }

  const search = event => {
    if (event.key === 'Enter') {
      searchItem(event.target.value)
    }
  }

  const filter = () => {
    clearFilter()
  }

  const function1 = item => {
    return (
      <div className="inside">
        <img
          src={item.imageUrl}
          alt={`rating${item.ratingId}`}
          className="image"
        />
        <p>& up</p>
      </div>
    )
  }
  return (
    <div className="filters-group-container">
      <div className="dis1">
        <input
          type="search"
          id="search"
          placeholder="Search"
          onKeyUp={search}
        />
        <label htmlFor="search">
          <IoIosSearch />
        </label>
      </div>

      <div className="category">
        <h2 className="p1">Category</h2>
        {categoryOptions.map(item => (
          <p
            value={item.categoryId}
            onClick={() => categoryClick(item.categoryId)}
            key={item.categoryId}
          >
            {item.name}
          </p>
        ))}
      </div>

      <div className="category">
        <p className="p1">Rating</p>
        {ratingsList.map(item => (
          <button
            type="button"
            onClick={() => ratingFilter(item.ratingId)}
            value={item.ratingId}
            key={item.ratingId}
          >
            {function1(item)}
          </button>
        ))}
      </div>
      <button className="but" type="button" onClick={filter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
