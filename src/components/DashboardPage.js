import React from 'react';
import SelectEntryType from './SelectEntryType';
import EntryList from './EntryList';
import Spotlight from './Spotlight';

const DashboardPage = () => (
  <div>
    <Spotlight></Spotlight>
    <SelectEntryType></SelectEntryType>
    <EntryList></EntryList>
  </div>
);

export default DashboardPage;
