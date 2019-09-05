import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createArtifact } from '../../actions';

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

  onSubmit = (formValues) => {
    this.props.createArtifact(formValues);
  }

  render(){
    return(
      <form className="needs-validation" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
        <Field name="name" component={this.renderInput} label="Enter Name" placeholder="Title..." id="inputTitle" />
        <Field name="date" component={this.renderInput} label="Enter Date" placeholder="DD/MM/YYYY" id="inputDate" />
        <Field name="photo" component={this.renderInput} label="Enter Photo URL" placeholder="Photo URL" id="inputPhoto" />
        <Field name="ownerID" component={this.renderInput} label="Enter User ID" placeholder="00000" id="inputID" />
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

const wrappedForm = reduxForm({
  form: 'createArtifact',
  validate
})(CreateArtifact);

export default connect(null, { createArtifact })(wrappedForm);
