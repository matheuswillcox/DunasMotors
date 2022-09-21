import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
            <div>XXX</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">

      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>

      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;