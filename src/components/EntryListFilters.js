import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SelectEntryType from './SelectEntryType';

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
    /* onSortClick = (e) => {
        // https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-react-component
        this.setState((prevState) => ({sortByDateSelected: !prevState.sortByDateSelected}));
        if(this.state.sortByDateSelected) {
            this.props.sortByDate();
        }
    }*/
    onFilterClick = (e) => {
        const value = e.target.value;
        if(this.state.selectedFilter === value) {
            this.props.setFilter(null);
            return this.setState({selectedFilter: null});
        }
        this.props.setFilter(value);
        this.setState({selectedFilter: value});
    };
    render() { 
        let selectedFilter = this.state.selectedFilter;
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