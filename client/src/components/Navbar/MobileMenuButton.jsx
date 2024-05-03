import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function MobileMenuButton({ onClick }) {
  return (
    <button className="inline-block cursor-pointer lg:hidden top-0" onClick={onClick}>
      <FontAwesomeIcon className="text-1xl" icon={faBars} />
    </button>
  );
}