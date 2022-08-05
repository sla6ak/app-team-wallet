import React from 'react';
// import zxcvbn from 'zxcvbn';
import { Progress, ProgressBar } from './passwordStrengthMeter.styled';

// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';

const passwordStrengthMeter = ({ password }) => {
    // const testResult = zxcvbn(password);
    // const num = (testResult.score * 100) / 4;

    // const funcProgressColor = () => {
    //     switch (testResult.score) {
    //         case 0:
    //             return '#e5f1ef';
    //         case 1:
    //             return '#EA1111';
    //         case 2:
    //             return '#FFAD00';
    //         case 3:
    //             return '#9bc158';
    //         case 4:
    //             return '#24cca7';
    //         default:
    //             return 'none';
    //     }
    // };

    const changePasswordColor = () => ({
        // width: `${num}%`,
        // background: funcProgressColor(),
        height: '4px',
        width: '20%',
        background: '#24cca7',
    });

    return (
        <>
            <Progress className="progress">
                <ProgressBar className="progress-bar" style={changePasswordColor()}></ProgressBar>
            </Progress>
        </>
        // <Box sx={{ width: '100%', mt: '10px', background: '#24CCA7', borderRadius: 50 }}>
        //     <LinearProgress variant="determinate" value={60} />
        // </Box>
    );
};

export default passwordStrengthMeter;
