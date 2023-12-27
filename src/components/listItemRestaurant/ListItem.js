import { memo} from 'react'
import { NavLink } from 'react-router-dom'
function ListItem (props) {
    
    
    return(
        <li onClick={props.onClick}  className={props.clsLi}>
            <img src={props.img} className={`restListImg ${props.clsImg}`} alt='' />
            <NavLink onClick={props.onClick} className={props.clsA}>{props.icon}{props.title}</NavLink>
        </li>
    )
}
export default memo(ListItem)