import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createFamily } from '../../actions';
import Loading from '../misc/Loading';

class CreateFamily extends React.Component{
    renderInput = ({ input, label, placeholder, id, meta }) => {
        return(
          <div className="form-group">
            <label className="form__label">{label}</label>
            <input
              type="text"
              className="form-control form__input"
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
            <section className="section-create">
                <div className="row">
                    <div className="create create-family">
                        <div className="create-form"> 
                            <form className="needs-validation form" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                                <div className="u-center-text u-margin-bottom-big">
                                    <h2 class="heading-secondary">Create A Family!</h2>
                                </div>
                                <div className="form__group">
                                    <Field name="name" component={this.renderInput} label="Enter Name" placeholder="Title..." id="inputTitle" />
                                    <Field name="desc" component={this.renderInput} label="Enter Description" placeholder="Description..." id="inputDesc" />
                                    <input className="btn btn-secondary" type="submit" value="Submit" />   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}

const wrappedForm = reduxForm({
    form: 'createFamily',    
})(CreateFamily);

export default connect(null, { createFamily})(wrappedForm);
