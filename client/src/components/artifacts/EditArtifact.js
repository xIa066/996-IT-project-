import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchArtifact, editArtifact } from '../../actions';

class EditArtifact extends React.Component {
    componentDidMount(){
        this.props.fetchArtifact(this.props.match.params.id);
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
            </div>
       );
    }

    onSubmit = (formValues) => {
        this.props.editArtifact(this.props.match.params.id, formValues);
    }

    render(){
        if(this.props.artifact){
            return(
                <form className="needs-validation" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                    <Field name="name" component={this.renderInput} label="Enter Name" placeholder="Title..." id="inputTitle" />
                    <Field name="date" component={this.renderInput} label="Enter Date" placeholder="DD/MM/YYYY" id="inputDate" />
                    <Field name="ownerID" component={this.renderInput} label="Enter User ID" placeholder="00000" id="inputID" />
                    <Field name="description" component={this.renderInput} label="Enter Description" placeholder="Description..." id="inputDesc" />
                    <input className="btn btn-secondary" type="submit" value="Submit" />
                </form>
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
})(EditArtifact);

export default connect(mapStateToProps, { fetchArtifact, editArtifact })(wrappedForm);