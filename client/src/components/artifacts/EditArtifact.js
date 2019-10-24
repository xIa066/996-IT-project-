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
        this.props.editArtifact(this.props.match.params.id, formValues);
    }

    render(){
        if(this.props.artifact){
            return(
                <section className="section-create">
                    <div className="row">
                        <div className="edit">
                            <div className="create-form">
                                <form className="needs-validation form" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                                    <div className="u-center-text u-margin-bottom-big">
                                        <h2 class="heading-secondary">Edit your Artifact!</h2>
                                    </div>
                                    <div className="form__group">
                                        <Field name="name" component={this.renderInput} label="Enter Name" placeholder="Title..." id="inputTitle" />
                                        <Field name="date" component={this.renderInput} label="Enter Date" placeholder="DD/MM/YYYY" id="inputDate" />
                                        <Field name="description" component={this.renderInput} label="Enter Description" placeholder="Description..." id="inputDesc" />
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
})(EditArtifact);

export default connect(mapStateToProps, { fetchArtifact, editArtifact })(wrappedForm);