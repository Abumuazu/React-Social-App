import {FC} from "react"
import "../../Styles/Header/HeaderOptions.css";
import {Avatar} from "@material-ui/core"

interface IHead {
    Icon: any,
    title: string,
    avatar: string
}
const HeaderOptions:FC<IHead> = ({avatar, Icon, title}) => {
return (
    <div className="headerOptions">
{Icon && <Icon style = {{margin:'0 auto'}}className="headerOptions"  />} 
{avatar && <Avatar className="headerOptions__icon" src={avatar} alt="avatar image" />}
<h3 className= "headerOptions__title">{title}</h3>
    </div>
)
}

export default HeaderOptions
