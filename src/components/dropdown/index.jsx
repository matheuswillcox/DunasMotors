import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Dropdown({options = []}) {
  return (
    <>
      {options.map(option => (
          <DropdownButton
            as={ButtonGroup}
            key={option?.name}
            id={`dropdown-variants-${option?.name}`}
            variant={option?.name.toLowerCase()}
            title={option?.name}
          >
            <BootstrapDropdown.Item eventKey="1">{option?.component}</BootstrapDropdown.Item>

          </DropdownButton>
        ),
      )}
    </>
  );
}

export default Dropdown;