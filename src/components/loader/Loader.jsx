import { MutatingDots } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { LoaderContainer } from 'components/loader/Loader.styled';

function Loader() {
    return (
        <LoaderContainer>
            <MutatingDots
                height="100"
                width="100"
                color="#24CCA7"
                secondaryColor="#4A56E2"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoaderContainer>
    );
}

export default Loader;
