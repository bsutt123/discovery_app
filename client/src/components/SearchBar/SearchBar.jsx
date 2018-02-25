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
    this.props.submitForm(this.state.search);
    this.setState({search: ''});
    event.preventDefault();
  }
  render() {
    return (
      <div className={styles.container} >
        <form>
          <label> Search For Movies:
            <input type="text" onChange={this.handleChange} value={this.state.search} className={styles.searchBox} />
          </label>
          <input type="submit" value="Submit" onClick={this.submitForm}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;