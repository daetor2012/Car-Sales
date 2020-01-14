import React from 'react';
import { removeType } from "../actions/actions";
import { connect } from "react-redux";

const AddedFeature = props => {
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeType(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(state => {
  return {}
}, {
  removeType: removeType
})(AddedFeature);
