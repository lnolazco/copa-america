import * as React from 'react';
import { List, ListHeader, ListItem, Page } from 'react-onsenui';

const data = [
  {
    name: 'Luis',
    points: 10,
  },
  {
    name: 'Dante',
    points: 8,
  },
  {
    name: 'Raul',
    points: 6,
  },
  {
    name: 'Alexis',
    points: 4,
  },
];

const renderRow = (row: any, index: number) => (
  <ListItem key={index}>
    <div className="left">{row.name}</div>
    <div className="right">{row.points}</div>
  </ListItem>
);

const Positions: React.StatelessComponent = () => (
  <Page>
    <List
      dataSource={data}
      renderRow={renderRow}
      renderHeader={() => (
        <ListHeader>
          <div className="left">Name</div>
          <div className="right">Points</div>
        </ListHeader>
      )}
    />
  </Page>
);

export default Positions;
