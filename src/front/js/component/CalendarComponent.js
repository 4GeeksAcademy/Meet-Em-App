import React from 'react';
import ReactCalendar from 'react-calendar';
import '../component/CalendarComponent.css'
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    return (
        <div className="col-3 position-relative">
            <div className="position-absolute top-0 end-0">
                <ReactCalendar />
            </div>
            {/* Additional content */}
        </div>
    );
};

export default CalendarComponent;
