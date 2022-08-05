import styled from '@emotion/styled';
import Switch from '@mui/material/Switch';
import btnMinus from '../../images/btn-minus.png';
import btnPlus from '../../images/btn-plus.png';

// для стилизации компонентов из материал юа их можно сюда затянуть и от них наследоваться! это поможет стилизировать то что не стилизируется пропсами
export const WrapperTransaction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    @media (min-width: 768px) {
        width: 540px;
        height: 508px;
    }
`;
export const FormaCastom = styled.form`
    max-width: 410px;
    width: 100%;

    margin-top: 30px;

    @media (min-width: 768px) {
        width: 410px;
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
                backgroundImage: `url(${btnMinus})`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
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
            backgroundImage: `url(${btnPlus})`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export const InputWrapper = styled.div`
    height: 40px;
    width: 100%;
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
    max-width: 300px;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;
