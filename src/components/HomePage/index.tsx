import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './style.scss'
import ProductItem from "../ProductItem";
import { ApplicationState } from "../../store";
import { fetchRequest } from "../../store/ticket/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Ticket, TicketActionTypes } from "../../store/ticket/types";
import { ClassNames } from "@emotion/core";
import { Loader } from "../loaders";
import TicketForm from "../TicketForm";
import plusIcon from '../../icons/plus.png';

interface PropsFromState {
  loading: boolean;
  data: Ticket[];
  errors?: string;
  showFormPopup: boolean;
}

interface propsFromDispatch {
  fetchRequest: (offset: number) => any;
  setShowForm: (show: boolean) => void;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest,
  showFormPopup,
  setShowForm
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchRequest(offset);
  }, [offset]);

  return (
    <div className="home-page">
      <div className="page-header">
        <div>

          <div className="title">כרטיסים לאירוע</div>
          <div className="text">מכאן הכל מתחיל</div>
        </div>
        <div>
          <button className="plus-icon"onClick={() => setShowForm(true)}>
            <img src={plusIcon} />
          </button>
        </div>
        <div>
          <button>search</button>
        </div>
      </div>
      <div className="ticket-list-container">
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </div>
      <div className="page-footer">
        {loading ? <Loader />
          : <button className="load-more" onClick={() => setOffset(oldOffset => oldOffset + 10)}>טען עוד</button>
        }
      </div>
      <TicketForm />
    </div>
  );
};

const mapStateToProps = ({ tickets }: ApplicationState) => ({
  loading: tickets.loading,
  errors: tickets.errors,
  data: tickets.data,
  showFormPopup: tickets.showFormPopup
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: (offset: number) => {
      dispatch(fetchRequest(offset));
    },
    setShowForm: (show: boolean) => {
      dispatch({ type: TicketActionTypes.SHOW_FORM_POPUP, payload: show });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
