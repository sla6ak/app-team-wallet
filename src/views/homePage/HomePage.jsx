import React from 'react';
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
                <li>
                    <Link to="/currency" style={({ isActive }) => activeBtn(isActive)}>
                        <DollarIcn />
                    </Link>
                </li>
            </BtnList>
            <SumBlock>
                <SumTitle>Your balance</SumTitle>
                <SumValue>&#8372; 24 000</SumValue>
            </SumBlock>
            {/* <TableMobile /> */}
            <TableLarge />
            <PlusBtn>
                <AddIcn />
            </PlusBtn>
        </HomePageWrap>
    );
};

export default HomePage;
