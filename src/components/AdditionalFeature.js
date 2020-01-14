import React from 'react';
import { addType } from "../actions/actions";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  
  const addFeature = (event) => {
    event.preventDefault();
    
    
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addType(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  state => {
    return {};
  },
  { addType: addType })(AdditionalFeature);
