import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 40px;
`;

export const Switcher = styled.input`
    appearance: none;
    &::after {
        position: absolute;
        left: -40px;
        content: '';
        width: 80px;
        height: 40px;
        border-radius: 30px;
        box-shadow: 0 0 1px 1px #e0e0e0;
    }

    &::before {
        content: '';
        background-image: url('images/btn-minus.png');
    }

    &:checked&::before {
    }
`;

export const Label = styled.label`
    position: relative;
`;
