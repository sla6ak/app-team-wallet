import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
// import AddIcon from '@mui/icons-material/Add';
import png from '../../images/test-png.png';
// import qwe from '../../images/sprite.svg';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.form`
    border: dashed 1px red;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    @media (min-width: 768px) {
        position: relative;
        width: 540px;
        height: 508px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        border-radius: 20px;
        padding: 40px 73px;
    }
`;

export const ModalCloseBtn = styled.div`
    display: none;
    @media (min-width: 768px) {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

export const ModalTitle = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    @media (min-width: 768px) {
        font-size: 30px;
        line-height: 45px;
    }
`;

export const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${png})`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#ff0000' : '#ffffff',
                border: '1px solid #E0E0E0',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        // backgroundColor: theme.palette.mode === 'dark' ? '#ff0000' : '#ff1100',

        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundColor: 'blue',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
        borderRadius: 20 / 2,
        border: '1px solid #E0E0E0',
    },
}));
export const InputWrapper = styled.div`
    height: 40px;
    /* width: 100%; */
    width: 394px;
    @media (min-width: 768px) {
    }
`;

export const InlineWrapper = styled.div`
    width: 100%;
    display: contents;
    @media (min-width: 768px) {
        display: flex;
        gap: 32px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    margin-top: 40px;
`;

export const ButtonAdd = styled(Button)`
    border-radius: 20px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    background-color: #24cca7;
    :hover {
        background-color: #1cad8e;
    }
`;

export const ButtonCancel = styled(Button)`
    border-radius: 20px;
    font-weight: 400;
    width: 100%;
    font-size: 18px;
    line-height: 27px;
    height: 50px;
    margin-bottom: 20px;
    color: #4a56e2;
    border-color: #4a56e2;
`;
