import React from 'react';
import PropTypes from 'prop-types';

class Headline extends React.Component {

  render() {
    const { header, desc, tempArray } = this.props;
    if (!header) return null;
    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p>{desc}</p>
        <p>{tempArray[0].email}</p>
      </div>
    )
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArray: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool
  }))
}

export default Headline;