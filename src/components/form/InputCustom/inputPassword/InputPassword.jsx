import { useRef, useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const InputPassword = (props) => {
  const {
    labelFor, labelContent, isRequired, isError, msgError, ...rest
  } = props;

  const passwordRef = useRef(null);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSeenPassword = () => {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text';
      setIsShowPassword(true);
    } else {
      passwordRef.current.type = 'password';
      setIsShowPassword(false);
    }
  };

  return (
    <>
      <div className="input-custom input-custom-password">
        {labelContent && (
          <Form.Label htmlFor={labelFor}>
            {labelContent} {isRequired && <span className="is-required">*</span>}
          </Form.Label>
        )}
        <InputGroup>
          <FormControl type="password" ref={passwordRef} {...rest} />
          <span className="btn-show-password" onClick={handleSeenPassword}>
            {isShowPassword ? 'Ẩn' : 'Hiện'}
          </span>
        </InputGroup>
        {isError && <div className="form-error-msg">{msgError}</div>}
      </div>
    </>
  );
};

export default InputPassword;
