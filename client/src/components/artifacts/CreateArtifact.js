import React from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { createArtifact, uploadImage, getUser } from '../../actions';


class CreateArtifact extends React.Component {

  componentDidMount(){
    this.props.getUser(this.props.authUser);
  }

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
        <label className="form__label" id={id}>{label}</label>
        <input
          type="text"
          className="form-control form__input"
          id={id}
          placeholder={placeholder}
          {...input}
          autoComplete="off"
          />
          {this.renderError(meta)}
      </div>
    );
  }

  renderRadioInput = ({ input, name, meta, label }) => {
    return(
      <div className="form-check form-check-inline form__radio-group">
        <input className="form-check-input form__radio-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" {...input} />
        <label className="form-check-label form__radio-label" htmlFor="inlineRadio1">{label}</label>
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

  onSubmit = async (formValues) => {
    var fileData = new FormData();
    var imageFile = document.querySelector('#imageInput');
    fileData.append("image", imageFile.files[0]);
    await this.props.uploadImage(fileData);
    console.log(this.props.upload);
    formValues.photo = this.props.upload.url;
    this.props.createArtifact(this.props.authUser, formValues);
  }

  renderFamilyOptions = () => {
    if(this.props.user.families){
      return this.props.user.families.map((family, index) => {
        return(
          <React.Fragment key={index}>
            <option value={family.familyID} >{family.familyName}</option>
          </React.Fragment>
        )
      })
    }else{
        return null;
    }
    
  }

  render(){
    return(
      <section className="section-create">
        <div className="row">
          <div className="create">
            <div className="create-form">
              <form className="needs-validation form" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                <div className="u-center-text u-margin-bottom-big">
                  <h2 className="heading-secondary">Create an Artifact!</h2>
                </div>
                <div className="form__group">
                  <Field name="name" component={this.renderInput} label="Enter Name" placeholder="Title..." id="inputTitle" />
                  <Field name="date" component={this.renderInput} label="Enter Date" placeholder="DD/MM/YYYY" id="inputDate" />
                  <Field name="description" component={this.renderInput} label="Enter Description" placeholder="Description..." id="inputDesc" />
                  <Field name="photo" component={this.renderImageInput} label="Enter Photo URL" placeholder="Photo URL" id="inputPhoto" /><br/>
                  <label className="form__label mx-3">Family: </label>
                  <Field name="family" component="select" className="form__family-selector">
                    <option value="none"></option>
                    {this.renderFamilyOptions()}
                  </Field>
                  <div>
                    <label className="form__label">Artifact Type: </label>
                    <div className="form__radio">
                      <Field name="artifactType" component={this.renderRadioInput} type="radio" value="tradition" label="Tradition"/>
                      <Field name="artifactType" component={this.renderRadioInput} type="radio" value="item" label="Item"/>
                    </div>
                  </div>
                  <input className="btn btn-submit" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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

const mapStateToProps = state => {
  return { upload: state.upload, user: state.user };
}

const wrappedForm = reduxForm({
  form: 'createArtifact',
  validate
})(CreateArtifact);

export default connect(mapStateToProps, { change, uploadImage, createArtifact, getUser })(wrappedForm);
