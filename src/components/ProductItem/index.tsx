import React, { useState } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Ticket } from "../../store/ticket/types";
import { PercentageLoader } from "../loaders";

import './style.css'

interface propsFromComponent {
  item: Ticket;

}

interface propsFromDispatch {
}

type Props = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<Props> = ({ item }) => {

  const [checked, setChecked] = useState(!!item.active)


  const check = (v: any) => {
    setChecked((oldValue: boolean) => !oldValue)
  }

  const getPercent = () => {
    return (item.amount/(item.amount_avaliable + item.amount) * 100).toFixed(0)
  }
  return (
    <div className="ticket" key={item.title}>
      <div className="percent">

        <PercentageLoader percent={getPercent()} color={item.color} />
      </div>
      {item.image ? <img className="image" src={item.image} />
        : <div className="image" style={{ backgroundColor: ('#' + item.color) }}></div>}

      <div className="content">

        <div className="title">{item.title}</div>
        <div className="amount"> {item.amount}/{item.amount_avaliable + item.amount} יחידות</div>
        <div className="price">{item.price + ''}</div>

      </div>
      <div className="switch-wrapper">
        <label className="switch">
          <input className={(checked ? 'checked' : 'not-checked') + " checkbox"} onClick={check} />
          <span className="slider round"></span>
          <span className="text">{checked ? 'פעיל' : 'כבוי'}</span>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
