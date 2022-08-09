import img from '../../images/plug-image.png';
import { NoDataText, NoDataWrap } from './NoDataPlug.styled';

const NoDataPlug = () => {
    return (
        <NoDataWrap>
            <NoDataText>There is nothing here yet. Add your first transaction.</NoDataText>
            <img src={img} width="300" alt="no data plug" />
        </NoDataWrap>
    );
};

export default NoDataPlug;
