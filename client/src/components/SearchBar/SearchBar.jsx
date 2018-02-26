import React, { Component } from 'react';
import styles from './search-bar.module.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    event.preventDefault();
    this.setState({
      search: event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault();
    this.props.submitForm(this.state.search);
    this.setState({search: ''});
  }
  render() {
    return (
      <div className={styles.container} >
        <form onSubmit={this.submitForm}>
          <label className={styles.label}> <h4> Search For Movies: </h4> </label>
          <input type="text" onChange={this.handleChange} value={this.state.search} className={styles.searchBox} />
          <input type="submit" value="Search" className="btn" />
        </form>
      </div>
    )
  }
}

export default SearchBar;