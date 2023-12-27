import { memo } from 'react'
import { NavLink } from 'react-router-dom'

function NavItem(props){
    return(
        <li>
            
            <div className='navListItem'>
                    <img className='navListImg' src={ require(`../../asset/img/${props.image}`)} alt={props.title} />
                <NavLink  to={(`/${props.link}`)}>
                        <p className="navListTitle">{props.title}</p>
                </NavLink>
            </div>
        </li>
    )
}
export default memo(NavItem)


