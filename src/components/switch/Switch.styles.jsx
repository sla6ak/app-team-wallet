import styled from '@emotion/styled';

const a = `&:before {
    content: '+';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 44px;
    height: 44px;
    border-radius: 21px;
    transition: 0.2s;color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #24cca7;
    color: ${props => {
        return props.theme.colors.accent;
    }};
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
}`;

export const InputWrapper = styled.label`
    position: relative;
`;

export const Input = styled.input`
    position: absolute;
    left: -9999px;
    top: -9999px;

    &:checked + span:before {
        content: '–';
        position: absolute;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -3px;
        margin-left: 5px;
        width: 44px;
        height: 44px;
        border-radius: 21px;
        transition: 0.2s;
        background: #ff6596;
        box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    }

    &:checked + span {
        &:before {
            left: calc(100% - 2px);
            transform: translateX(-100%);
        }
    }
`;

export const Slider = styled.span`
    display: flex;
    cursor: pointer;
    font-size: 38px;
    width: 80px;
    height: 40px;
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    background-color: #fff;
    position: relative;
    transition: 0.2s;
    ${({ checkBt }) => {
        if (!checkBt) {
            return a;
        }
    }}

    &:active:before {
        width: 28px;
    }
`;
