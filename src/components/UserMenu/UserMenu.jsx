import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import LogoutIcon from '@mui/icons-material/Logout';

import { Username, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </button>
    </Wrapper>
  );
};
