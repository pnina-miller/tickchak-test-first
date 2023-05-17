import React, { ChangeEventHandler, useEffect, useState } from "react";
import './style.scss'
import bicycleIcon from '../../icons/bicycle.png';
interface PropsFromState {
    label: string;
    name: string;
    explanation: string;
}

interface propsFromDispatch {
    onChange: (event: any) => void;
}

type AllProps = PropsFromState & propsFromDispatch;
const CustomInput: React.FC<AllProps> = ({ onChange, label, name, explanation }) => {

    return (
        <div className="input-wrapper">
            <img className="bicycle-icon" src={bicycleIcon} />
            <div className="form__group">
                <input type="email" id="email" className="form__field" placeholder={label} onChange={onChange} />
                <label htmlFor="email" className="form__label">{label}</label>
            </div>
            <div className="input-explanation">
                <span className="name">שם בכרטיס </span>
                <span className="explanation">לדוגמא: כרטיס כניסה </span>
            </div>

        </div>




    )

}
export default CustomInput