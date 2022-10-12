import { NavLink } from 'react-router-dom';

const ResetPasswordPage = () => (
  <div>
    ResetPasswordPage{' '}
    <ul>
      <li>
        <NavLink exact to="/" className="demo" activeClassName="demo-active">
          Home Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="demo" activeClassName="demo-active">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="demo" activeClassName="demo-active">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/confirm-account/nvha"
          className="demo"
          activeClassName="demo-active"
        >
          Confirm Account
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/forgot-password"
          className="demo"
          activeClassName="demo-active"
        >
          Forgot Password
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reset-password/nvha"
          className="demo"
          activeClassName="demo-active"
        >
          Reset Password
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="demo" activeClassName="demo-active">
          Home Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/demo" className="demo" activeClassName="demo-active">
          NotFound
        </NavLink>
      </li>
    </ul>
  </div>
);

export default ResetPasswordPage;
