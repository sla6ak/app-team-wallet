import UserMenu from '../userMenu/UserMenu';
import TitleWallet from '../titleWallet/TitleWallet';
import { Header } from './AppBar.styled';

const AppBar = () => {
    return (
        <>
            <Header>
                <TitleWallet />
                <UserMenu />
            </Header>
        </>
    );
};

export default AppBar;
