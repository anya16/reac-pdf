import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import  './style.less';
import preventBgScroll from './preventBgScroll'

export default class OstMask extends Component {

  constructor(props){
    super(props)
    this.state = {
      _preventBgScroll: preventBgScroll()
    }
  }


  showUpdata = () => {

    if (this.props.show) {
      this.container && this.container.removeEventListener('animationend',  this.removeContainer)
      this.state._preventBgScroll.afterOpen();
    } else {
      this.container && this.container.addEventListener('animationend', this.removeContainer)
      this.state._preventBgScroll.beforeClose();
    }

    var $dom = document.querySelector(".ost_mask_default_popup");
    if ($dom) {
      $dom.style.left = `calc(50% _ (${$dom.clientWidth/2}px))`
      $dom.style.top = this.props.top || `calc(50% _ (${$dom.clientHeight/2}px))`
    }
  }

  componentDidMount() {

    this.showUpdata()
  }

  componentDidUpdate(prevProps) {

    if (prevProps.show !==  this.props.show) {
      this.showUpdata()
    }
  }

  removeContainer = () => {
    this.container && this.container.parentNode.removeChild(this.container);
    this.componentActivated = false;
    this.container = null;
  }

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `ost_mask_container_${(new Date().getTime())}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  }

  getComponent = () => {
    const {show, onClick, type} = this.props;
    return (
      <div>
        {!type && (
          <div
            className={classnames("ost_mask_default_popup", {
              ost_mask_show_fade_out: !show,
              ost_mask_show_fade_in: show
            })}
          >
            {this.props.children}
          </div>
        )}
        {
          <div
            className={classnames("", "ost_mask", {
              ost_mask_show_fade_out: !show,
              ost_mask_show_fade_in: show
            })}
            onClick={e => onClick && onClick(e)}
          ></div>
        }
      </div>
    );
  }

  render() {
    const {show} = this.props;
    if (show) this.componentActivated = true;

    if (!this.componentActivated) return null;

    return ReactDOM.createPortal( this.getComponent(), this.getContainer());
  }
}