import React, { ChangeEventHandler, useEffect, useState } from "react";
import { connect } from "react-redux";
import './style.scss'
import { ApplicationState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Ticket, TicketActionTypes } from "../../store/ticket/types";
import CustomInput from "../CustomInput";
import closeIcon from '../../icons/close.png';

interface PropsFromState {
    loading: boolean;
    data: Ticket[];
    errors?: string;
    showFormPopup: boolean;
}

interface propsFromDispatch {
    addTicket: (payload: Ticket) => void;
    setShowForm: (show: boolean) => void;
}

type AllProps = PropsFromState & propsFromDispatch;

const TicketForm: React.FC<AllProps> = ({
    loading,
    errors,
    data,
    addTicket,
    setShowForm,
    showFormPopup
}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [isFirstShow, setIsFirstShow] = useState(true)

    const createTicket = () => {
        const newTicket: Ticket = {
            title: name,
            amount: 0,
            amount_avaliable: amount,
            price: price,
            color: '27C4D1',
            active: 1,
            image: ''
        };
        addTicket(newTicket)
    }

    const closeForm = () => {
        setIsFirstShow(false);
        setShowForm(false);
    }
    return (
        <div className={"ticket-form-container " + (showFormPopup ? 'open' : isFirstShow ? '' : 'close')}>
            <div className="form-header">
                <button className="close-button" onClick={closeForm}>
                    <img src={closeIcon} />
                </button>
                <span className="title">כרטיס</span>
            </div>
            <div className="form-body">
                <CustomInput onChange={(e: any) => { ; setName(e.target.value) }} label="שם הכרטיס" name=">שם בכרטיס" explanation="לדוגמא: כרטיס כניסה " />
                <CustomInput onChange={(e: any) => { ; setPrice(e.target.value) }} label="מחיר" name="שם בכרטיס" explanation="לדוגמא: כרטיס כניסה " />
                <CustomInput onChange={(e: any) => { ; setAmount(e.target.value) }} label="כמות" name="שם בכרטיס" explanation="לדוגמא: כרטיס כניסה " />

            </div>
            <div className="form-footer">
                <button onClick={closeForm}>סגור</button>
                <button className="btn-colored" onClick={createTicket}>הוסף</button>
            </div>
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
        addTicket: (payload: Ticket) => {
            dispatch({ type: TicketActionTypes.ADD_TICKET, payload });
            dispatch({ type: TicketActionTypes.SHOW_FORM_POPUP, payload: false });
        },
        setShowForm: (show: boolean) => {
            dispatch({ type: TicketActionTypes.SHOW_FORM_POPUP, payload: show });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
