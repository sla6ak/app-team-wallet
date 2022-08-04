import Media from 'react-media';
import {
    HomeIcn,
    TimelineIcn,
    DollarIcn,
    Link,
    LinkActive,
    BtnList,
    LinkText,
    LinkTextActive,
    NavLinkWrap,
} from './Navigation.styled';

const Navigation = () => {
    const activeBtn = isActive => {
        if (isActive) return LinkActive;
    };
    const activeBtnText = isActive => {
        if (isActive) return LinkTextActive;
    };

    return (
        <BtnList>
            <NavLinkWrap>
                <Link to="/home" style={({ isActive }) => activeBtn(isActive)}>
                    <HomeIcn />
                </Link>
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <LinkText to="/home" style={({ isActive }) => activeBtnText(isActive)}>
                            Home
                        </LinkText>
                    )}
                />
            </NavLinkWrap>
            <NavLinkWrap>
                <Link to="/statistic" style={({ isActive }) => activeBtn(isActive)}>
                    <TimelineIcn />
                </Link>
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <LinkText to="/statistic" style={({ isActive }) => activeBtnText(isActive)}>
                            Statistics
                        </LinkText>
                    )}
                />
            </NavLinkWrap>
            <Media
                query="(max-width: 767px)"
                render={() => (
                    <li>
                        <Link to="/currency" style={({ isActive }) => activeBtn(isActive)}>
                            <DollarIcn />
                        </Link>
                    </li>
                )}
            />
        </BtnList>
    );
};

export default Navigation;
