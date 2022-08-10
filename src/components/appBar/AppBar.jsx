import UserMenu from '../userMenu/UserMenu';
import TitleWallet from '../titleWallet/TitleWallet';
import { Header, HeaderBox, Link } from './AppBar.styled';
import { Container } from 'components/container/Container';

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
