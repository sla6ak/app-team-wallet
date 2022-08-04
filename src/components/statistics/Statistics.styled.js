// import styled from '@emotion/styled';

import styled from '@emotion/styled';
// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами

export const Container = styled.div`
    display: 'flex';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;

    background: rgba(255, 255, 255, 0.4);
`;

export const Form = styled.form`
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    margin-bottom: 20px;
    padding: 13px 20px;
    border: 1px solid #000000;
    border-radius: 30px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const Table = styled.table`
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 280px;

    font-family: 'Circe';
    font-style: normal;
`;

export const Theader = styled.thead`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    background: #ffffff;
    border-radius: 30px;

    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
`;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;

    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    border-bottom: 1px solid #dcdcdf;
`;

export const Td = styled.td`
    display: flex;
    align-items: center;
`;

export const Tfoot = styled.tfoot`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px 20px;

    & > tr {
        display: flex;
        justify-content: space-between;
        alight-item: center;
        width: 100%;
        margin-bottom: 14px;

        font-weight: 700;
        font-size: 16px;
        line-height: 24px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const Color = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 16px;
    border-radius: 2px;
`;
