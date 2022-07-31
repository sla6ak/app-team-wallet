import React from 'react';
import Media from 'react-media';
import {
    HomeIcn,
    TimelineIcn,
    DollarIcn,
    Link,
    LinkActive,
    BtnList,
    SumBlock,
    HomePageWrap,
    SumTitle,
    SumValue,
    AddIcn,
    PlusBtn,
} from './HomePage.styled';
import TableMobile from '../../components/Table/TableMobile';
import TableLarge from '../../components/Table/TableLarge';

const HomePage = () => {
    const activeBtn = isActive => {
        if (isActive) return LinkActive;
    };
    return (
        <HomePageWrap>
            <Media
                queries={{
                    mobile: '(max-width: 767px)',
                    tablet: '(min-width: 768px) and (max-width: 1279px)',
                    pc: '(min-width: 1280px)',
                }}
            ></Media>
            <BtnList>
                <li>
                    <Link to="/" style={({ isActive }) => activeBtn(isActive)}>
                        <HomeIcn />
                    </Link>
                </li>
                <li>
                    <Link to="/statistics" style={({ isActive }) => activeBtn(isActive)}>
                        <TimelineIcn />
                    </Link>
                </li>
                {matches => (
                    <>
                        {matches.mobile && (
                            <li>
                                <Link to="/currency" style={({ isActive }) => activeBtn(isActive)}>
                                    <DollarIcn />
                                </Link>
                            </li>
                        )}
                    </>
                )}
            </BtnList>
            <SumBlock>
                <SumTitle>Your balance</SumTitle>
                <SumValue>&#8372; 24 000</SumValue>
            </SumBlock>
            <TableMobile />
            <TableLarge />
            <PlusBtn>
                <AddIcn />
            </PlusBtn>
        </HomePageWrap>
    );
};

export default HomePage;
