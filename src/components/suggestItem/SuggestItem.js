import { memo } from 'react'
// import './SuggestItem.css'
import {Card } from 'react-bootstrap'
import {AiTwotoneStar} from 'react-icons/ai'
import{CiDeliveryTruck} from 'react-icons/ci'
function SuggestItem(props){
    return(
        <a href="#home">
            <Card style={{marginBottom:'20px'}} className='suggestCard'>
                <div style={{position:'relative' }}>
                <Card.Img style={{height:'150px'}} variant="top" src={props.image} />
                <img className='logo' variant="top" src={props.logo} />
                </div>
                <Card.Body style={{marginTop:'15px'}}>
                    <Card.Title className='cardTitle'>{props.title}</Card.Title>
                    <Card.Text className='cardText'>
                    <AiTwotoneStar color='#FFCC00' size='15px' />
                    <span className='rate'>{props.rate}</span>
                    <span className='count'>({props.count})</span>
                    <p className='cardDesc'>{props.description}</p>
                    <p className="cardProperty"><CiDeliveryTruck size='20px' /> پیک فروشنده <b>{props.property}</b></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}
export default memo(SuggestItem)