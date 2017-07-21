import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/app';
import api from '../api';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.renderCategories = this.renderCategories.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    selectCategory(event, _cat){
        this.props.selectCategory(_cat);
        this.props.history.push('/map/');
    }

    renderCategories(){
        return(
            this.props.categories.map((category, index) => {
                return(
                    <div key={index} className="square-box">
                        <div className="square-content" onClick={(event) => this.selectCategory(event, category) }>
                            <div><span>{category}</span></div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {

        return (
            <div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="">What type of cuisine you feelin'?</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container-fluid categories_list">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ app_data }) {
    return {
        restaurants: app_data.restaurants,
        categories: app_data.categories
    }
}

export default connect(mapStateToProps, actions)(Categories);
