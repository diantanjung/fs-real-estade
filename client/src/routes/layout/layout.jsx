import { Outlet } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import './layout.scss'

function Layout(){
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout