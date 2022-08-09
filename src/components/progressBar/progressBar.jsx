import { Line } from 'rc-progress';
import { Wrapper } from './progressBar.styled';

export const ProgressBar = progressBar => {
    const length = progressBar.progressBarParams;

    const progressBarParams = length => {
        let progressPercent = (length / 12) * 100;
        let progressColor = '#ff0000';

        if (length < 5 || length > 12) {
            progressColor = '#ff0000';
        }
        if (length >= 6 && length <= 8) {
            progressColor = '#ff9147';
        }
        if (length > 8 && length <= 12) {
            progressColor = '#24CCA7';
        }

        return { progressPercent, progressColor };
    };
    const progress = progressBarParams(length);
    return (
        <>
            <Wrapper>
                <Line
                    percent={progress.progressPercent}
                    strokeColor={progress.progressColor}
                    strokeWidth={2}
                    trailWidth={2}
                    trailColor={'#E5F1EF'}
                />
            </Wrapper>
        </>
    );
};
