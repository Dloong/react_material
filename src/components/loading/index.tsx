import React from 'react';
import ReactDOM from 'react-dom';
import {CircularProgress, Backdrop} from '@material-ui/core';

let defaultState = {
    show:false,
    progress: 0
}


class ProgressLoading extends React.Component<any, any> {
    constructor(props: any, context: any){
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
          this.state.show? <Backdrop open={this.state.show}>
              <div className={'loading-wrapper'}>
                <CircularProgress />
              </div>
            </Backdrop>: null
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