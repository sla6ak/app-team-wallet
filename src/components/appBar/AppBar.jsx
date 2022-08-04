import UserMenu from '../userMenu/UserMenu';
import TitleWallet from '../titleWallet/TitleWallet';
import { Header, HeaderBox } from './AppBar.styled';
import { Container } from 'components/container/Container';

const AppBar = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderBox>
                        <TitleWallet />
                        <UserMenu />
                    </HeaderBox>
                </Container>
            </Header>
        </>
    );
};

export default AppBar;
