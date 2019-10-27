import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {getUser, editUser} from '../../actions';
class EditUser extends React.Component {
    componentDidMount(){
        this.props.getUser(this.props.authUser);
    }

    renderInput = ({ input, label, placeholder, id, meta }) => {
        return(
            <div>
                <label className="form__label" id={id}>{label}</label>
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

    onSubmit = (formValues) => {
        this.props.editUser(this.props.authUser, formValues);
    }

    render(){
        if(this.props.authUser){
            return(
                <section className="section-create">
                    <div className="row">
                        <div className="update_user">
                            <div className="create-form">
                                <form className="needs-validation form" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                                    <div className="u-center-text u-margin-bottom-big">
                                        <h2 class="heading-secondary">Update your User Profile!</h2>
                                    </div>
                                    <div className="form__group">
                                        <Field name="name" component={this.renderInput} label="Change of Name" placeholder="Name" id="inputTitle" />
                                        <Field name="bod" component={this.renderInput} label="Date of Birth" placeholder="DD/MM/YYYY" id="inputDate" />
                                        <Field name="bio" component={this.renderInput} label="Enter Bio" placeholder="Bio..." id="inputDesc" />
                                        <input className="btn btn-submit btn-edit" type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }else{
            return null;
        }
    }
}


const wrappedForm = reduxForm({
form: 'editArtifact',
enableReinitialize: true
})(EditUser);

export default connect(null, { getUser, editUser})(wrappedForm);