import { Navigate, useParams } from 'react-router-dom';
import { fetch } from 'components/verifyEmail/fetch';
import { toastSuccess, toastErr } from 'components/verifyEmail/toast';
//import { useEmailVerifyMutation } from 'redux/authAPI';

export const VerifyPage = () => {
    const { verificationToken } = useParams();
    //const [emailVerify] = useEmailVerifyMutation();

    //const result = async verificationToken => {
    //    const response = await emailVerify(verificationToken);
    //    console.log(response.error.status);
    //    if (response.error.status === 404) {
    //        toastErr();
    //        return toastErr();
    //    }

    //    if (response.status === 200) {
    //        return toastSuccess();
    //    }
    //};

    //result(verificationToken);

    let status;
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

    console.log(status, 'out');

    return (
        <div>
            <Navigate to="/login" />
        </div>
    );
};
