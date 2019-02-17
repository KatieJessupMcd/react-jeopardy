import React, { Component } from 'react';
// import './Category.css';

class Category extends Component {
  static defaultProps = {};
  render() {
    return <div className="Category display-5 text-center" id="category-display">
    Category: {this.props.category}
    </div>;
  }
}

export default Category;