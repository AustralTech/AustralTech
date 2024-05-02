import Image from 'next/image';
import PropTypes from 'prop-types';

const Button = ({ type, title, variant }) => {
  return (
    <button type={type} className={`flexCenter gap-3 border ${variant}`}>
      <label className="whitespace-nowrap">{title}</label>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Button
