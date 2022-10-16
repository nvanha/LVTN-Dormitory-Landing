import { Form, FormControl, InputGroup } from 'react-bootstrap';

const InputText = (props) => {
  const {
    labelFor, labelContent, isRequired, isError, msgError, ...rest
  } = props;

  return (
    <>
      <div className="input-custom input-custom-text">
        {labelContent && (
          <Form.Label htmlFor={labelFor}>
            {labelContent} {isRequired && <span className="is-required">*</span>}
          </Form.Label>
        )}
        <InputGroup>
          <FormControl {...rest} />
        </InputGroup>
        {isError && <div className="form-error-msg">{msgError}</div>}
      </div>
    </>
  );
};

export default InputText;
