import React, {Component} from 'react'

class SectionSelector extends Component{
  state = {
    changedSelection: ''
  };

  render() {
    return(
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default SectionSelector;