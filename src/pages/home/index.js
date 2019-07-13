import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

    handleAdd = () => {
      const { count } = this.state;
      this.setState({
        count: count + 1,
      });
    };

    render() {
      const { count } = this.state;
      return (
        <div>
          <Button onClick={() => this.handleAdd()}>新增</Button>
          <p>
            { count }
          </p>
        </div>
      );
    }
}

export default Home;
