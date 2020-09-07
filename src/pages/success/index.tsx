import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.css'

const landing = require('../../assets/png/success_landing.png')
const arrow = require('../../assets/svg/success_arrow.svg')

const Success: React.FC<RouteComponentProps> = () => {
  return (
    <div className="success-container" >
      <div className="success-tip" >
        <div>
          <div className="content">
            <div>
              <h1>申请成功！</h1>
              <p>
                点击加入贵宾席 等待登船
                &nbsp;&nbsp;
                <img src={arrow} alt="箭头" />
              </p>
            </div>
            <p>
              乘客 ID ： TRAPPIST-1b-74282
            </p>
          </div>
          <img src={landing} alt="着陆" />
        </div>
      </div>
      <div className="msg">
        <h2>宇宙漫游指北</h2>
      </div>
    </div>
  )
};

export default Success;
