import { SpinnerDotted } from 'spinners-react';
import { LoaderContainer } from './Loader.styled';

function Loader() {
    return (
        <LoaderContainer>
            <SpinnerDotted size={50} thickness={100} speed={100} color="rgba(36, 204, 167, 1)" />
        </LoaderContainer>
    );
}

export default Loader;
