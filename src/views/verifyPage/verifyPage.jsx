import { Navigate, useParams } from 'react-router-dom';
import { fetch } from 'components/verifyEmail/fetch';
import { toastSuccess, toastErr } from 'components/verifyEmail/toast';

export const VerifyPage = () => {
    const { verificationToken } = useParams();
    fetch(verificationToken)
        .then(res => {
            const status = res.status;
            console.log(status, 'then');
            toastSuccess();
        })
        .catch(error => {
            const status = error.response.status;
            console.log(status, 'catch');
            toastErr();
        });

    return (
        <div>
            <Navigate to="/login" />
        </div>
    );
};
