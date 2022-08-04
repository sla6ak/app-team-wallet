import Media from 'react-media';
import TableMobile from '../../components/table/TableMobile';
import TableLarge from '../../components/table/TableLarge';

const HomeTab = () => {
    return (
        <>
            <Media query="(max-width: 767px)" render={() => <TableMobile />} />
            <Media query="(min-width: 768px)" render={() => <TableLarge />} />
        </>
    );
};

export default HomeTab;
