import { Greeeting, LogOutBtn, Wrapper } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
    const userName = 'User';

    return (
        <Wrapper>
            <Greeeting>{userName}</Greeeting>
            <LogOutBtn onClick={() => console.log('logoutUser')}>
                <LogoutIcon />
            </LogOutBtn>
        </Wrapper>
    );
};

export default UserMenu;