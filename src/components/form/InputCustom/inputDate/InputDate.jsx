import moment from 'moment';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const InputDate = (props) => {
  const {
    labelFor,
    labelContent,
    isRequired,
    isError,
    msgError,
    fieldValue,
    ...rest
  } = props;

  return (
    <>
      <div className="input-custom input-custom-date">
        {labelContent && (
          <Form.Label htmlFor={labelFor}>
            {labelContent}{' '}
            {isRequired && <span className="is-required">*</span>}
          </Form.Label>
        )}
        <InputGroup>
          <FormControl
            type="date"
            data-date={
              fieldValue
                ? moment(fieldValue).format('DD/MM/YYYY')
                : 'DD/MM/YYYY'
            }
            {...rest}
          />
        </InputGroup>
        {isError && <div className="form-error-msg">{msgError}</div>}
      </div>
    </>
  );
};

export default InputDate;
