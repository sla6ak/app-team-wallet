import UserMenu from '../userMenu/UserMenu';
import TitleWallet from '../titleWallet/TitleWallet';
import { Container } from 'components/container/Container';
import { Header, HeaderBox, Link } from './AppBar.styled';

const AppBar = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderBox>
                        <Link to="/home">
                            <TitleWallet />
                            </Link>
                            <UserMenu />
                    </HeaderBox>
                </Container>
            </Header>
        </>
    );
};

export default AppBar;
