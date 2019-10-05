import React, { FunctionComponent, Fragment } from 'react';
import { useAlert, positions, AlertCustomOptionsWithType } from 'react-alert';

export const Alerts: FunctionComponent = () => {
  const alert = useAlert();

  const showAlert = () => {
    alert.show('Oh look, an alert!', {
      position: positions.BOTTOM_LEFT
    } as AlertCustomOptionsWithType); //alert will be shown in bottom left
    alert.show('Oh look, an alert!', {
      position: positions.BOTTOM_RIGHT
    } as AlertCustomOptionsWithType); //alert will be shown in bottom right
    alert.show('Oh look, an alert!'); //alert will use the Provider's position `top right`
  };

  return (
    <button className="btn btn-secondary" onClick={showAlert}>
      Show Alert
    </button>
  );
};

export default Alerts;
