import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import "../../Styles/Header/Header.css";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    return (
        <div className="header">
        <div className="header__left">
<img className ="image" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
<div className="header__search">

<SearchIcon style= {{color: "#000"}} />
<input type="text" />
</div>
        </div>
        <div className="header__right">
<HeaderOptions title="Home" Icon = {HomeIcon} avatar=""/>
<HeaderOptions title="My Network" Icon = {SupervisorAccountIcon } avatar="" />
<HeaderOptions title="Jobs" Icon = {BusinessCenterIcon } avatar="" />
<HeaderOptions title="Messaging" Icon = {ChatIcon } avatar="" />
<HeaderOptions title="Notifications" Icon = {NotificationsIcon } avatar="" />
<HeaderOptions title="me" Icon = {null} avatar = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />

        </div>
        </div>
    )
}

export default Header
