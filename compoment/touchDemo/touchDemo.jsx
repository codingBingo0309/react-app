import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';


module.exports = class Touch extends Component {

    /*
    *
     * 初始化状态信息
      * liked初始值为false
    * */
    constructor(props){
        super(props);
        this.state = {
            liked:false
        }
    }
    //下一步操作
    next (){
        this.refs.reactSwipe.next()
    }
    //上一步操作
    prev(){
        this.refs.reactSwipe.prev()
    }

    /*
    * 绑定dom元素
    * */
    render() {
        return (
            <div>
                <ReactSwipe ref="reactSwipe" className="carousel" swipeOptions={{continuous: false}}>
                    <div><img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00002.jpg" alt=""/></div>
                    <div><img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00003.jpg" alt=""/></div>
                    <div><img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00001.jpg" alt=""/></div>
                    <div><img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00006.jpg" alt=""/></div>
                    <div><img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00007.jpg" alt=""/></div>
                    <div><img src="http://qiniu-aladin.dlhis.com/aladin-v-0.0.1-tplView-tpl00005.jpg" alt=""/></div>
                </ReactSwipe>
                <div>
                    <button type="button" onClick={this.prev.bind(this)}>Prev</button>
                    <button type="button" onClick={this.next.bind(this)}>Next</button>
                </div>


            </div>
        )
    }
};

