import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const { value: firsNameValue, inputIsValid: firstNameIsValid, hasError: firstNameHasError, valueChangeHandler: firstNameChangeHandler, valueBlurHandler: firstNameBlurHandler, resetInput: resetFirstName} = useInput((value) => value.trim() !== '');
  const { value: lastNameValue, inputIsValid: lastNameIsValid, hasError: lastNameHasError, valueChangeHandler: lastNameChangeHandler, valueBlurHandler: lastNameBlurHandler, resetInput: resetLastName} = useInput((value) => value.trim() !== '');
  const { value: emailValue, inputIsValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, resetInput: resetEmail} = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClasses = !firstNameIsValid ? 'form-control invalid' : 'form-control';
  const lastNameClasses = !lastNameIsValid ? 'form-control invalid' : 'form-control';
  const emailClasses = !emailIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firsNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className="error-text">Please enter a valid First Name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text">Please enter a valid Last Name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
