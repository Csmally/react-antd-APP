import React from 'react';
import A from './pages/contents'
import { Button } from 'antd';

class AntdStudy extends React.Component {
  state = {
    flag: false,
    right:10,
    top:10
  };

  changeView = () => {
    if (this.state.flag == false) {
      this.setState({
        flag: true
      })
    } else {
      this.setState({
        flag: false
      })
    }
  }
  render() {
    return (
      <div>
        <div style={{ right:this.state.right,top:this.state.top,zIndex:9999,position:'absolute'}}
          
        >
          <Button onClick={this.changeView}>切换</Button>
        </div>
        <div>
          {this.state.flag == false ? '' : <A />}
        </div>
      </div>

)
  }
}

export default AntdStudy