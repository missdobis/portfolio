import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                   <h5>{this.props.startYear} - {this.props.endYear}</h5>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4> 
                    <h6>{this.props.schoolDescription}</h6>
                </Cell>
           </Grid>
        )
    }
}

export default Education;