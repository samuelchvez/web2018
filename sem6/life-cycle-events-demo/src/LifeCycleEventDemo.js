import React from 'react';


class LifeCycleEventDemo extends React.Component {
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log("this.props:", this.props);
    console.log("nextProps:", nextProps);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        { text }
      </div>
    );
  }
}

export default LifeCycleEventDemo;
