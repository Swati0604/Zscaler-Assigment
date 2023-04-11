import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Custom Component
import Sidebar from '../../component/Sidebar';
import LineGraph from './LineGraph';

//Utils
import { SIDEBAR_ITEMS } from '../../utils';
import { attackersData } from '../../utils/data';
import { AttrackerDataType } from '../../utils/types';


//Style
import './eventGraph.scss';

const EventGraph = () => {
    const startDateIntialValue = new Date(attackersData[0].timestamp);
    const endDateInitialValue = new Date();
    const [startDate, setStartDate] = useState<Date>(startDateIntialValue);
    const [endDate, setEndDate] = useState<Date>(endDateInitialValue);


    // Filter events within the specified time range
    const filteredData = attackersData.filter((event: AttrackerDataType) =>
        new Date(event.timestamp) >= startDate && new Date(event.timestamp) <= endDate
    );


    // Group events by date and count the number of events per day
    const groupedData: { [key: string]: number } = filteredData.reduce((acc: any, event) => {
        const date = event.timestamp.substring(0, 10);
        acc[date] = acc[date] ? acc[date] + 1 : 1;
        return acc;
    }, []);


    const graphData = Object.entries(groupedData).map(([x, y]) => ({ x, y }))

    return (
        <>
            <Sidebar
                currentPage={SIDEBAR_ITEMS[0].title}
                sidebarItems={SIDEBAR_ITEMS}
            >

                <div className='event-graph-style'>
                    <h1 className='left-align graph-page-heading heading'>Event Graph</h1>
                    <p className='title left-align'>Select Date Range</p>
                    <div className='valign-wrapper date-picker-ui left-align'>
                        <div className='vflex vflex-colomn'>
                            <label className='sub-title'>Start Date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                            />
                        </div>
                        <div className='vflex vflex-colomn'>
                            <label className='sub-title'>End Date</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date: Date) => setEndDate(date)}
                            />
                        </div>
                    </div>
                    <LineGraph
                        graphData={graphData}
                    />
                </div>

            </Sidebar>
        </>
    );
}


export default EventGraph;