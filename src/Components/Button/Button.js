import React from 'react';
import './Button.css';
import plus from '../../assets/icons/plus.svg';
import trash from '../../assets/icons/trash.svg';

function Button({label, onClick, size}) {
  let btnClass = "btn";
  let iconSrc;

  if (size === 1) {
    btnClass = btnClass + ' btn-small';
  } else if (size === 2) {
    btnClass = btnClass + ' btn-mid';
  } else if (size === 3) {
    btnClass = btnClass + ' btn-large';
  } else {
    btnClass = btnClass + ' btn-mid';
  }

  if (label.toUpperCase() === "USUŃ") {
    btnClass = btnClass + ' btn-red';
    iconSrc = trash;
  } else if (label.toUpperCase() === "DODAJ") {
    btnClass = btnClass + ' btn-green';
    iconSrc = plus;
  } else if (label.toUpperCase() === "EDYTUJ") {
    btnClass = btnClass + ' btn-yellow';
  }

  return <button className={btnClass} onClick={onClick}>
    {label} {iconSrc && <img src={iconSrc} alt=""/>}
    </button>
}


export default Button;