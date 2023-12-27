import { memo } from 'react'
import {IoIosArrowBack} from 'react-icons/io'
function CategoryItem(props){
    return(
        <div className="categoryItem">
            <a href="#home">
                <img className='categoryImg' src={props.image} alt={props.title} />
                <div className="categoryLabel">
                    <p>{props.title}</p>
                    <IoIosArrowBack className='arrowIcon' color='#FF0BA2'/>
                </div>
            </a>
        </div>
    )
}
export default memo(CategoryItem)