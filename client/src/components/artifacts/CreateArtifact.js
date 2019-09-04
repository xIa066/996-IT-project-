import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateArtifact extends React.Component {
  renderError({ error, touched }){
    return(
      <div className="invalid-feedback">
        {error}
      </div>
    );
  }

  renderInput = ({ input, label, placeholder, id, meta }) => {
    return(
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          className="form-control"
          id={id}
          placeholder={placeholder}
          {...input}
          autoComplete="off"
          />
          {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  render(){
    return(
      <form className="needs-validation" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
        <Field name="title" component={this.renderInput} label="Enter Title" placeholder="Title..." id="inputTitle" />
        <Field name="place" component={this.renderInput} label="Enter Place" placeholder="Place..." id="inputPlace" />
        <Field name="type" component={this.renderInput} label="Enter Type" placeholder="Type..." id="inputType" />
        <Field name="description" component={this.renderInput} label="Enter Description" placeholder="Description..." id="inputDesc" />
        <input className="btn btn-secondary" type="submit" value="Submit" />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if(!formValues.place){
    errors.place = "You must enter a place";
  }

  if(!formValues.type){
    errors.type = "Please select a type";
  }

  if(!formValues.description){
    errors.description = "Please select a description";
  }

  return errors;
}

export default reduxForm({
  form: 'createArtifact',
  validate
})(CreateArtifact);
