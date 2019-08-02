import React from 'react';
import {withData, withService} from "../hoc";
import {Selector} from "../common";

const mapArchitectStateMethodToProps = (service) => {
  return {
    getData: service.getArchitectureState
  };
};

const ArchitectState = withService(
  withData(Selector), mapArchitectStateMethodToProps);

export default ArchitectState;
