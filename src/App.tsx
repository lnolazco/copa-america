import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Toolbar, Page, Tabbar, Tab } from 'react-onsenui';
import Results from './components/Results';
import Positions from './components/Positions';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends React.Component {
  state = {
    index: 0,
  };

  renderToolbar = () => {
    const titles = ['Home', 'Scores'];
    return (
      <Toolbar>
        <div className="center">{titles[this.state.index]}</div>
      </Toolbar>
    );
  };

  renderTabs = () => {
    return [
      {
        content: <Positions key="tab-0" />,
        tab: <Tab label="Home" icon="md-home" key="tabheader-0" />,
      },
      {
        content: <Results key="tab-1" />,
        tab: <Tab label="Scores" icon="md-view-headline" key="tabheader-1" />,
      },
    ];
  };

  updateTab = ({ index }: { index: number }) => {
    if (index !== this.state.index) {
      this.setState({ index });
    }
  };

  render() {
    const tabProps = {
      swipeable: true,
      position: 'auto',
      index: this.state.index,
      onPreChange: this.updateTab,
      renderTabs: this.renderTabs,
    };

    return (
      <Page renderToolbar={this.renderToolbar}>
        {
          // @ts-ignore
          <Tabbar {...tabProps} />
        }
      </Page>

      // <Page renderToolbar={this.renderToolbar}>
      //   <LazyList
      //     length={10000}
      //     renderRow={this.renderRow}
      //     calculateItemHeight={() => (platform.isAndroid() ? 48 : 44)}
      //   />
      // </Page>
    );
  }
}

// const App: React.FC = () => {
//   return (
//     <MyPage />
//   );
// }

export default App;
