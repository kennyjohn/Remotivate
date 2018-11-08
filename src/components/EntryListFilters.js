import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';
import SelectEntryType from './SelectEntryType';
import { DateRangePicker } from 'react-dates';

export class EntryListFilters extends React.Component {
    state = {
        selectedFilter: null,
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };
    onFilterClick = (e) => {
        const value = e.target.value;
        /* unsets filter when button toggled  */
        if(this.state.selectedFilter === value) {
            this.props.setFilter(null);
            return this.setState({selectedFilter: null});
        }
        /* sets filter */
        this.props.setFilter(value);
        this.setState({selectedFilter: value});
    };
    componentDidMount() {
        /* selectedFilter should always be null upon component render */
        this.props.setFilter(this.state.selectedFilter);
    }
    render() { 
        const selectedFilter = this.state.selectedFilter;
        return (
            <div className="content-container content-container--stretch">
                <div className="input-group">
                    <span className="input-group__header">Filters:</span>
                    <div className="input-group__item">
                        <button 
                        onClick={this.onFilterClick}
                        value="text"
                        className={selectedFilter === 'text' ? 'button__filters--selected' : 'button__filters'}>
                        Text</button>
                        <button  
                        onClick={this.onFilterClick}
                        value="video"
                        className={selectedFilter === 'video' ? 'button__filters--selected' : 'button__filters'}>
                        Video</button>
                        <button  
                        onClick={this.onFilterClick}
                        value="image"
                        className={selectedFilter === 'image' ? 'button__filters--selected' : 'button__filters'}>
                        Image</button>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        ></DateRangePicker>
                    </div>
                    <div className="input-group__item">
                       <SelectEntryType></SelectEntryType>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setFilter: (value) => dispatch(setFilter(value)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryListFilters);