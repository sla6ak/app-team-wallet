import { Greeeting, LogOutBtn, Wrapper, TextBtn } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { newToken } from '../../redux/sliceToken';
import { isUserName } from 'redux/sliceUserName';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.userName);
    const logOut = () => {
        dispatch(newToken(''));
        dispatch(isUserName(''));
        toast.info('LogOut user!');
    };

    return (
        <Wrapper>
            <Greeeting>{userName}</Greeeting>
            <LogOutBtn onClick={logOut}>
                <LogoutIcon />
                <TextBtn> Exit </TextBtn>
            </LogOutBtn>
        </Wrapper>
    );
};

export default UserMenu;
