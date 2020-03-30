import React from 'react';

class SortButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rateUp: true
    };
  }
 
  render() {
    const { sortByRate, sortByReverseRate } = this.props;

    return (
      <div className="col align-self-center text-right">
        {this.state.rateUp ? (
          <button type="button" className="btn btn-primary" onClick={() => {
            this.setState({
              rateUp: false
            });
            sortByRate();
          }}>
            Highest rating
          </button>
          ) : (
          <button type="button" className="btn btn-primary" onClick={() => {
            this.setState({
              rateUp: true
            });
            sortByReverseRate();
          }}>
            Lowest rating
          </button>
        )}
      </div>     
    );
  }
}

export default SortButton;