import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {Row, Col, Button, Card, CardTitle} from 'react-materialize'
import '../../styles/styles.css'
import MyTeams from './MyTeams'

const defaultimage = require('../../Images/perfil.jpg')

export default class Profile extends Component {
    state = {
        user: {},
        imgprf: null
    }
    componentDidMount(){
        this.state.imgprf = defaultimage
        this.setState({ user:JSON.parse(sessionStorage.user) });
    }
    render() {
        return (
        <div>
        <div>
            <Row>
            <Col l={3} className='grid-example'></Col>
            <Col l={6} className='grivd-example'>
                <Card className=''>
                    <Row>
                        <Col>
                        <img src={this.state.imgprf} className="profile-img"/>
                        </Col>
                        <h4><b>{this.state.user.username}</b></h4>
                        <h5><b>{this.state.user.email}</b></h5>
                    </Row>
                </Card>
            </Col>
            </Row>
            <Row>
            <Col l={3} className='grid-example'></Col>
            <Col m={6} s={12}>
                    <MyTeams />
            </Col>
            </Row>
        </div>
        </div>
        )
    }
}
