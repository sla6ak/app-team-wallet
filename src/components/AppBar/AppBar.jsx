import UserMenu from '../UserMenu/UserMenu';
import LogoWallet from '../LogoWallet/LogoWallet';
import { Header } from './AppBar.styled';

const AppBar = () => {
    return (
        <>
            <Header>
                <LogoWallet />
                <UserMenu />
            </Header>
        </>
    );
};

export default AppBar;
