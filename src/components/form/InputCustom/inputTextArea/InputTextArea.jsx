import { useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const InputTextArea = (props) => {
  const {
    labelFor,
    labelContent,
    isRequired,
    isError,
    msgError,
    maxLength,
    fieldLength,
    ...rest
  } = props;

  const [textAreaCount, setTextAreaCount] = useState(0);

  const handleTextCount = (e) => {
    setTextAreaCount(e.target.value.length);
  };

  const autoGrow = (e) => {
    const { target } = e;
    target.style.height = 'auto';
    target.style.minHeight = '115px';
    target.style.height = `${target.scrollHeight + 10}px`;
  };

  return (
    <>
      <div className="input-custom input-custom-text-area">
        {labelContent && (
          <Form.Label htmlFor={labelFor}>
            {labelContent}{' '}
            {isRequired && <span className="is-required">*</span>}
          </Form.Label>
        )}
        <div className="text-area-wrapper">
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              onKeyUp={handleTextCount}
              onInput={autoGrow}
              maxLength={maxLength || 200}
              {...rest}
            />
          </InputGroup>
          <span
            className={`text-counter cs-fz-12 cs-fw-400 cs-text-secondary-black ${
              textAreaCount > (maxLength || 200) && 'cs-text-red'
            }`}
          >
            {fieldLength || textAreaCount}/
            <b className="cs-fw-600 cs-text-black">{maxLength || 200}</b>
          </span>
        </div>
        {isError && <div className="form-error-msg">{msgError}</div>}
      </div>
    </>
  );
};

export default InputTextArea;
