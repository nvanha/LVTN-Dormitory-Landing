import { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * color: green, orange, red
 * variant: normal, primary, secondary, line, link, outline-secondary, disabled
 * size: l, m, s
 * onClick: () => {}
 * customClassName: ''
 */

const ButtonCustom = forwardRef((props, ref) => {
  const {
    color, variant, size, customClassName, children, ...rest
  } = props;

  const COLOR = color?.trim()
    ? `btn-custom__color--${color}`
    : 'btn-custom__color--green';

  const TYPE = variant?.trim()
    ? `btn-custom__variant--${variant}`
    : 'btn-custom__variant--primary';

  const SIZE = size?.trim()
    ? `btn-custom__size--${size}`
    : 'btn-custom__size--m';

  const DISABLED = variant === 'disabled' ? true : '';

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`btn-custom ${COLOR} ${TYPE} ${SIZE} ${customClassName}`}
      disabled={DISABLED}
      ref={ref}
      {...rest}
    >
      {children || 'Button Content'}
    </button>
  );
});

ButtonCustom.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  customClassName: PropTypes.string,
};

ButtonCustom.defaultProps = {
  color: '',
  variant: '',
  size: '',
  customClassName: '',
};

ButtonCustom.displayName = 'ButtonCustom';

export default ButtonCustom;
