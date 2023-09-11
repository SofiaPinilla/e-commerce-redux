import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Link to="/">Home |</Link>
      {user ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <div>
          <Link to="/login"> Login | </Link>
          <Link to="/register"> Register</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
