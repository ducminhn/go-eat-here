import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions/app';
import Autocomplete from 'react-google-autocomplete';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.fetchData = this.fetchData.bind(this);
    }

    componentWillMount(){}
    

    componentDidMount(){}

    fetchData(){
        this.props.searchRestaurants();
    }
    
    render() {
        return (
            <div className="bg-primary text-center d-flex h-100 align-items-center">
                <div className="container">
                    <div className="row p-1">
                        <div className="col-lg-12">
                            <h1 className="display-1 text-white">Where do you want to eat?</h1>
                            <Autocomplete
                                className="form-control w-75 mx-auto p-4 mt-5"
                                style={{ width: '90%' }}
                                onPlaceSelected={(place) => {
                                    console.log(place);
                                    this.fetchData();
                                }}
                                types={'(address)'}
                                componentRestrictions={{country: "ca"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ app_data }) {
    return {
        restaurants: app_data.restaurants
    }
}

export default connect(mapStateToProps, actions)(HomePage);
