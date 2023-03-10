import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterState } from 'redux/filterSlice';

import React from 'react';

export const Filter = () => {
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </>
  );
};
