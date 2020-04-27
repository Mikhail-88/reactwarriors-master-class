import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './sort-button.scss';

class SortButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rateUp: true
    };
  }

  handleSortByRate = () => {
    return () => {
      this.setState({
        rateUp: false
      });
      this.props.sortByRate();
    };
  }

  handleSortByReverseRate = () => {
    return () => {
      this.setState({
        rateUp: true
      });
      this.props.sortByReverseRate();
    };
  }

  render() {
    const { rateUp } = this.state;

    return (
      <div className="col align-self-center text-right">
        {rateUp ? (
          <button 
            type="button"
            title="Sort by Rate Up"
            className="btn btn-secondary sort-button" 
            onClick={this.handleSortByRate()}
          >
            &uArr;
          </button>
          ) : (
          <button 
            type="button"
            title="Sort by Rate Down"
            className="btn btn-secondary sort-button" 
            onClick={this.handleSortByReverseRate()}
          >
            &dArr;
          </button>
        )}
      </div>     
    );
  };
};

SortButton.propTypes = {
  sortByRate: PropTypes.func.isRequired,
  sortByReverseRate: PropTypes.func.isRequired
};

export default SortButton;