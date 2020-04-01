import React, { Component } from 'react';

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
            className="btn btn-primary" 
            onClick={() => {
              this.setState({
                rateUp: false
              });
              sortByRate();
            }}
          >
            Highest rating
          </button>
          ) : (
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => {
              this.setState({
                rateUp: true
              });
              sortByReverseRate();
            }}
          >
            Lowest rating
          </button>
        )}
      </div>     
    );
  }
}

export default SortButton;