import { Line } from 'rc-progress';

export const ProgressBar = progressBar => {
    const length = progressBar.progressBarParams;

    const progressBarParams = length => {
        let progressPercent = (length / 12) * 100;
        let progressColor = '#8a0e0a';

        if (length < 6) {
            progressColor = '#8a0e0a';
        }
        if (length >= 6 && length <= 9) {
            progressColor = '#ff6800';
        }
        if (length > 9) {
            progressColor = '#1b5e00';
        }

        return { progressPercent, progressColor };
    };
    const progress = progressBarParams(length);
    return (
        <>
            <Line percent={progress.progressPercent} strokeColor={progress.progressColor} />
        </>
    );
};
