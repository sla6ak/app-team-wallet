import React from 'react';
import { ButtonStyle } from './GeneralButton.styled';

const GeneralButton = ({ text, disabled }) => {
    return (
        <ButtonStyle variant={'contained'} disabled={disabled}>
            {text}
        </ButtonStyle>
    );
};

export default GeneralButton;
