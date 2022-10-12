import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const DashboardLayout = (props) => {
  const render = () => (
    <Container className="p-0">
      <div className="credshare-content">
        <Route {...props} />
      </div>
    </Container>
  );

  return render();
};

export default DashboardLayout;
