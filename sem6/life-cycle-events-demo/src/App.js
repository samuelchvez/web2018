import React from 'react';

import { fetchItems } from './utils';
import LifeCycleEventDemo from './LifeCycleEventDemo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    fetchItems().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return <LifeCycleEventDemo items={items} />;
  }
}

export default App;
