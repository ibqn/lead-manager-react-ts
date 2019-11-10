import React, { FunctionComponent, Fragment, useEffect } from 'react';
import {
  useAlert,
  positions,
  types,
  AlertCustomOptionsWithType
} from 'react-alert';
import { isEmpty } from 'lodash';

import {
  TypedUseSelectorHook,
  useSelector as useSelectorGeneric,
  shallowEqual
} from 'react-redux';

import { AppState } from '../../store';
import { ErrorMessage } from '../../reducers/errors/types';
import { type } from 'os';

const useSelector: TypedUseSelectorHook<AppState> = useSelectorGeneric;

export const Alerts: FunctionComponent = () => {
  const alert = useAlert();
  const error = useSelector(state => state.errors, shallowEqual);

  const showAlert = (msg: string): void => {
    //alert will use the Provider's position `bottom center`
    alert.show(msg, {
      position: positions.TOP_CENTER,
      type: types.ERROR
    } as AlertCustomOptionsWithType);
  };

  const processMessage = (msg: ErrorMessage) => {
    if (msg.name) {
      showAlert(`Name: ${msg.name}`);
    }
    if (msg.email) {
      showAlert(`Email: ${msg.email}`);
    }
    if (msg.message) {
      showAlert(`Message: ${msg.message}`);
    }
    if (typeof msg === 'string') {
      showAlert(msg);
    }
  };

  useEffect(() => {
    const { msg, status } = error;
    if (!isEmpty(error)) {
      processMessage(msg);
    }
  }, [error]);

  return <Fragment />;
};

export default Alerts;
