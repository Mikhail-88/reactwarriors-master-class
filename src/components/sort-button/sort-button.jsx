import React, { Component } from 'react';
import './sort-button.scss';

class SortButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rateUp: true
    };
  }

  render() {
    const { sortByRate, sortByReverseRate } = this.props;
    const { rateUp } = this.state;

    return (
      <div className="col align-self-center text-right">
        {rateUp ? (
          <button 
            type="button"
            title="Sort by Rate Up"
            className="btn btn-secondary sort-button" 
            onClick={() => {
              this.setState({
                rateUp: false
              });
              sortByRate();
            }}
          >
            &uArr;
          </button>
          ) : (
          <button 
            type="button"
            title="Sort by Rate Down"
            className="btn btn-secondary sort-button" 
            onClick={() => {
              this.setState({
                rateUp: true
              });
              sortByReverseRate();
            }}
          >
            &dArr;
          </button>
        )}
      </div>     
    );
  }
}

export default SortButton;