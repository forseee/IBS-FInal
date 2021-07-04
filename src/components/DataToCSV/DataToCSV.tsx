import React from 'react';
import { CSVLink } from 'react-csv';
import { Button } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const DataToCSV: React.FC = () => {
  const headers = [
    { label: 'id', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Area', key: 'area' },
    { label: 'Salary from', key: 'salaryFrom' },
    { label: 'Salary to', key: 'salaryTo' },
    { label: 'Salary currency', key: 'salaryCurrency' },
    { label: 'Get areaid', key: 'getAreaid' },
    { label: 'Unique id', key: 'uniqueId' },
    { label: 'dbid', key: 'dbid' },
  ];
  const {
    data: { items },
  } = useTypedSelector((state) => state);
  if (items !== null) {
    return (
      <Button>
        <CSVLink data={items} headers={headers} filename={'chart.csv'}>
          Export
        </CSVLink>
      </Button>
    );
  } else return null;
};