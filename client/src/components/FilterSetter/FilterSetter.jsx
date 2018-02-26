import React from 'react';
import styles from './filter-setter.module.css';
import 'Styles/buttons.css'

const FilterButton = ({name, setFilter, currentFilter, value}) => {
  let button = null;
  if (name ===  currentFilter) {
    button = (<button className='btn btn-disabled' disabled name={name} onClick={setFilter}> {value} </button>)
  } else {
    button = (<button className='btn' name={name} onClick={setFilter}> {value} </button>)
  }
  return (
    <span>
      {button}
    </span>
  )
}


const FilterSetter = ({currentFilter, setFilter}) => {
  return (
    <div className={styles.container} >
      <div className={styles.headingBox}>
        <h4> Select from a filter: </h4>
      </div>
      <form className={styles.form} >
        <FilterButton name="popular" setFilter={setFilter} currentFilter={currentFilter} value="Popular" />
        <FilterButton name="upcoming" setFilter={setFilter} currentFilter={currentFilter} value="Upcoming" />
        <FilterButton name="top_rated" setFilter={setFilter} currentFilter={currentFilter} value="Top Rated" />
      </form>
    </div>
  )
}

export default FilterSetter;