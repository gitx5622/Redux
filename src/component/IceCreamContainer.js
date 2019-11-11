import React from 'react'
import {buyIcecream}  from '../redux/action/iceCream';
import {connect} from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
          <h1>Number of IceCream  {props.numOfIcecream}</h1>  
          <button onClick={props.buyIcecream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecream: state.iceCream.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);