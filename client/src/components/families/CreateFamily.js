import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';

import { createFamily } from '../../actions';

class CreateFamily extends React.Component{
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
          </div>
        );
    }

    onSubmit = async (formValues) => {
        this.props.createFamily(this.props.authUser, formValues);
      }

    render(){
        return( 
            <form className="needs-validation" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                <Field name="name" component={this.renderInput} label="Enter Name" placeholder="Title..." id="inputTitle" />
                <Field name="desc" component={this.renderInput} label="Enter Description" placeholder="Description..." id="inputDesc" />
                <input className="btn btn-secondary" type="submit" value="Submit" />   
            </form>
        );
    }
}

const wrappedForm = reduxForm({
    form: 'createFamily',    
})(CreateFamily);

export default connect(null, { createFamily})(wrappedForm);
