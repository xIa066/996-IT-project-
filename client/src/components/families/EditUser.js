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

handleImageInput = functionType => e => {
    functionType(e.target.files[0]);
  }

renderImageInput = ({
    input: {
      value: omitValue,
      onChange,
      onBlur,
      ...inputProps,
    },
    meta: omitMeta,
    ...props,
  }) => {
    return(
    <div>
    <input
      onChange={this.handleImageInput(onChange)}
      type="file"
      {...inputProps}
      {...props}
      className="image-input"
      id="imageInput"
    />
    {/* <label htmlFor="imageInput">Choose a Picture</label> */}
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
                                    <Field name="name" component={this.renderInput} label="Change of Name" placeholder="Title..." id="inputTitle" />
                                    <Field name="bod" component={this.renderInput} label="Date of Birth" placeholder="DD/MM/YYYY" id="inputDate" />
                                    <Field name="bio" component={this.renderInput} label="Enter Bio" placeholder="Description..." id="inputDesc" />
                                    <Field name="photo" component={this.renderImageInput} label="Enter Photo URL" placeholder="Photo URL" id="inputPhoto" /><br/>
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

const mapStateToProps = state => {
const artifact = Object.values(state.artifacts)[0];
if(artifact){
   return {
       initialValues : { name: artifact.name, date: artifact.date, ownerID: artifact.ownerID, description: artifact.description, photo: artifact.photo },
       artifact: artifact
    }; 
}else{
    return null;
}

}

const wrappedForm = reduxForm({
form: 'editArtifact',
enableReinitialize: true
})(EditUser);

export default connect(mapStateToProps, { getUser, editUser})(wrappedForm);
