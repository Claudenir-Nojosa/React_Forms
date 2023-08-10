import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { value: nameInputValue, inputIsValid: nameInputIsValid, hasError: nameInputHasError, valueChangeHandler: nameInputChangeHandler, valueBlurHandler: nameInputBlurHandler, resetInput: resetNameInput } = useInput((value) => value.trim() !== "");
  const { value: emailInputValue, inputIsValid: emailInputIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, resetInput: resetEmailInput} = useInput((value) => value.includes('@'));
  
  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!nameInputIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = !nameInputIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = !emailInputIsValid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInputValue}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && <p className='error-text'>Please enter a valid name.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          value={emailInputValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid e-mail address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;