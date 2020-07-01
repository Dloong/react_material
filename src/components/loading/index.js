import React from 'react';
import ReactDOM from 'react-dom';
import {CircularProgress, Backdrop} from '@material-ui/core';

let defaultState = {
    show:false,
    progress: 0
}


class ProgressLoading extends React.Component {
    constructor(props){
        super(props)
        this.state = {...defaultState}

    }

    show(){ // 开始显示
        this.setState({
          show:true
        })

      }
      done(){ // 结束隐藏
        this.setState({
          show:false
        })
      }
    render() {
        return (
            <Backdrop open={this.state.show}>
              <div className={'loading-wrapper'}>
                <CircularProgress />
              </div>
            </Backdrop>
        );
    }
}
// 创建元素追加到body
let div = document.createElement('div');
let props = {
};
document.body.appendChild(div);

let Box = ReactDOM.render(React.createElement(
    ProgressLoading,
    props
  ),div);

export default Box;