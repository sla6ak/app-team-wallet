import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { newToken } from 'redux/sliceToken';
import { isUserName } from 'redux/sliceUserName';
import { toast } from 'react-toastify';
import { ButtonWrapper,
    ModalTitle,
    LogOutContainer,
    TitleAccent,
    Button,
} from './ModalLogOut.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';

const ModalLogOut = ({ onModalClose }) => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.userName);

    const logOut = () => {
        toast.info(`${userName} is successful logOut`);
        dispatch(newToken(''));
        dispatch(isUserName(''));
    };

    return (
        <>
            <LogOutContainer>
                <ModalTitle>
                    <TitleAccent>
                        Log Out
                    </TitleAccent>
                    Are you sure you want to log out?
                </ModalTitle>
                <ButtonWrapper>
                    <Button>
                        <GeneralButton fullWidth variant={'contained'} bts={'submit'} onClick={logOut} type="submit">
                            Yes
                        </GeneralButton>
                    </Button>
                    <Button>
                        <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                            No
                        </GeneralButton>
                    </Button>
                </ButtonWrapper>
            </LogOutContainer>
        </>
    );
};

export default ModalLogOut;