import { createTheme } from '@mui/material';

const customTheme = {
    colors: {
        white: '#FFFFFF',
        accent: '#4A56E2',
        green: '#24CCA7',
        purpure: '#FF6596',
        text: '#000000',
        helperText: '#BDBDBD',
        iconColor: '#E0E0E0',
        fone: '#E5E5E5',
        error: '#97000099',
        hoverGreen: '#1cad8e',
        hoverWhite: '#eef',
        category: {
            car: '#FD9498',
            products: '#FFD8D0',
            education: '#81E1FF',
            selfCare: '#C5BAFF',
            childCare: '#6E78E8',
            HauseHold: '#4A56E2',
            basicExp: '#FED057',
            leisure: '#24CCA7',
            other: '#00AD84',
        },
    },
    spacing: value => `${4 * value}px`,
};

export const materialTheme = createTheme(customTheme);
