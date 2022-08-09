import axios from 'axios';
import BASE_URL from '../../redux/testURL';

export const fetch = async verificationToken => {
    return await axios.patch(`${BASE_URL}auth/verify/${verificationToken}`);
};
