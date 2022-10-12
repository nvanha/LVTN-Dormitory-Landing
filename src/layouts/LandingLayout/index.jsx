import { Route } from 'react-router-dom';

const LandingLayout = (props) => {
  const render = () => (
    <div className="landing-layout">
      <Route {...props} />
    </div>
  );

  return render();
};

export default LandingLayout;
