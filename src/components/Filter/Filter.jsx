import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
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
