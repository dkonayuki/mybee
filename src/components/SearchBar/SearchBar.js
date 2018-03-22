import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Button
} from 'react-bootstrap';

import './SearchBar.css';

import BeeImg from '../../assets/images/bee.svg';

function SearchBar({
  value,
  onChange,
  onSubmit
}) {
  function handleInputChange(e) {
    onChange(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className="search-bar">
      <FormControl
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <Button
        className="search-bar__btn"
        type="submit"
        onClick={handleSubmit}
      >
        <img src={BeeImg} alt="" />
      </Button>
    </form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

SearchBar.defaultProps = {
  value: '',
  onChange: null,
  onSubmit: null
};

export default SearchBar;
