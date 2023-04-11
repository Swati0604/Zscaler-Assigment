import { useMemo } from 'react';

//Custom Component
import Sidebar from '../../component/Sidebar';
import TableContainer from '../../component/TableContainer';

//Utils
import { SIDEBAR_ITEMS } from '../../utils';
import { attackersData } from '../../utils/data';
import { AttrackerDataType } from '../../utils/types';

//Style
import './attackerDetails.scss';

const AttackerDetails = () => {
    const ATTACKER_DETAIL_COLUMN = useMemo(
        () => [
            {
                Header: 'TimeStamp',
                accessor: (attackersData: AttrackerDataType) => attackersData.timestamp,
            },
            {
                Header: 'Attacker Id',
                accessor: (attackersData: AttrackerDataType) => attackersData['attacker.id'],
            },
            {
                Header: 'Attacker Ip',
                accessor: (attackersData: AttrackerDataType) => attackersData['attacker.ip'],
            },
            {
                Header: 'Attacker Name',
                accessor: (attackersData: AttrackerDataType) => attackersData['attacker.name'],
            },
            {
                Header: 'Type',
                accessor: (attackersData: AttrackerDataType) => attackersData['decoy.type'],
            },
            {
                Header: 'Decoy Name',
                accessor: (attackersData: AttrackerDataType) => attackersData['decoy.name'],
            },
            {
                Header: () => null,
                id: 'expander', // 'id' is required
                Cell: ({ row }: any) => (
                  <span  {...row.getToggleRowExpandedProps()}>
                    {row.isExpanded ? 'hide' : 'show'}
                  </span>
                ),
            },
        ],
        []
    );


    const renderRowSubComponent = (row: any) => {
        return (
            <div>
               Can Select Row To Show Row Data: Sample Info {row.values['TimeStamp']}
            </div>
        );
    };



    return (
        <>
            <Sidebar
                currentPage={SIDEBAR_ITEMS[1].title}
                sidebarItems={SIDEBAR_ITEMS}
            >

                <div className='attacker-details-page'>
                    <h1 className='left-align attacker-details-heading heading'>Attacker Details</h1>
                    <TableContainer
                        columns={ATTACKER_DETAIL_COLUMN}
                        data={attackersData}
                        renderRowSubComponent={renderRowSubComponent}
                    />

                </div>
            </Sidebar>
        </>
    );
}







const TABLE_DATA = {

}
export default AttackerDetails;