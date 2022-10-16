import { Form, InputGroup } from 'react-bootstrap';

const InputSelect = (props) => {
  const {
    labelFor,
    labelContent,
    isRequired,
    isError,
    msgError,
    children,
    ...rest
  } = props;

  return (
    <>
      <div className="input-custom input-custom-select">
        {labelContent && (
          <Form.Label htmlFor={labelFor}>
            {labelContent}{' '}
            {isRequired && <span className="is-required">*</span>}
          </Form.Label>
        )}
        <InputGroup>
          <Form.Select {...rest}>{children}</Form.Select>
        </InputGroup>
        {isError && <div className="form-error-msg">{msgError}</div>}
      </div>
    </>
  );
};

export default InputSelect;
