import React from 'react';
import EntryList from './EntryList';
import Spotlight from './Spotlight';
import EntryListFilters from './EntryListFilters';

const DashboardPage = () => (
  <div>
    <Spotlight></Spotlight>
    <EntryListFilters></EntryListFilters>
    <EntryList></EntryList>
  </div>
);

export default DashboardPage;
