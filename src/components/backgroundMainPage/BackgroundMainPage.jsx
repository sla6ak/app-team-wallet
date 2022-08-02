import { BackgroundBox } from './BackgroundMainPage.styled';
import spr from '../../images/sprite.svg';
import { BlurMainPage } from './BackgroundMainPage.styled';
import Media from 'react-media';

const BackgroundMainPage = ({ children }) => {
    return (
        <BackgroundBox>
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <>
                        <svg className="icon-ellipse-blue">
                            <use href={spr + '#ellipse-1'}></use>
                        </svg>
                        <svg className="icon-ellipse-purp">
                            <use href={spr + '#ellipse-2'}></use>
                        </svg>
                    </>
                )}
            />

            <BlurMainPage />
            {children}
        </BackgroundBox>
    );
};

export default BackgroundMainPage;
