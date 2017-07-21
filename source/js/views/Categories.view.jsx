import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/app';


class Categories extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.restaurants);
        return(
            <div>Categories</div>
        )
    }
}

function mapStateToProps({ app_data }) {
    return {
        restaurants: app_data.restaurants
    }
}

export default connect(mapStateToProps, actions)(Categories);
