import { Line } from 'rc-progress';

export const progressBar = length => {
    let progressFiling = (length / 12) * 100;
    let progressColor = '#8a0e0a';
    switch (length) {
        case length <= 6:
            progressColor = '#8a0e0a';
            break;
        case length <= 9:
            progressColor = '#ff6800';
            break;

        case length > 9:
            progressColor = '#1b5e00';
            break;

        default:
            progressColor = '#8a0e0a';
            break;
    }

    return (
        <>
            <Line percent={progressFiling} strokeColor={progressColor} />
        </>
    );
};
