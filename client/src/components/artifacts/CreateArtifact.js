import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateArtifact extends React.Component {
  render(){
    return(
      <form>
        <Field name="title" />
        <Field name="place" />
        <Field name="type" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm(
  form: 'createArtifact'
)(CreateArtifact);
