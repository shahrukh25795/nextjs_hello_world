import React, { Component } from 'react';
import Select from 'react-select'
import { Router } from '../routes'


class User extends Component {
    constructor(props){
        super(props);
        this.state={
            userList: [
                {
                    "login": "drit",
                    "type": "superUser",
                },
                {
                    "login": "defunkt",
                    "type": "User",
                },
                {
                    "login": "pjhyett",
                    "type": "User",
                },
                {
                    "login": "wycats",
                    "type": "superUser",
                },
                {
                    "login": "ezmobius",
                    "type": "User",
                },
                {
                    "login": "ivey",
                    "type": "superUser",
                },
                {
                    "login": "evanphx",
                    "type": "User",
                },
                {
                    "login": "vanpelt",
                    "type": "superUser",
                },
                {
                    "login": "wayneeseguin",
                    "type": "User",
                },
                {
                    "login": "brynary",
                    "type": "superUser",
                },
                {
                    "login": "kevinclark",
                    "type": "User",
                },
                {
                    "login": "technoweenie",
                    "type": "superUser",
                },
                {
                    "login": "macournoyer",
                    "type": "User",
                },
                {
                    "login": "takeo",
                    "type": "superUser",
                },
                {
                    "login": "caged",
                    "type": "User",
                },
                {
                    "login": "topfunky",
                    "type": "superUser",
                },
                {
                    "login": "anotherjesse",
                    "type": "User",
                },
                {
                    "login": "roland",
                    "type": "User",
                },
                {
                    "login": "lukas",
                    "type": "superUser",
                },
                {
                    "login": "fanvsfan",
                    "type": "User",
                },
            ],
            dummyList :  [
                {
                    "login": "drit",
                    "type": "superUser",
                },
                {
                    "login": "defunkt",
                    "type": "User",
                },
                {
                    "login": "pjhyett",
                    "type": "User",
                },
                {
                    "login": "wycats",
                    "type": "superUser",
                },
                {
                    "login": "ezmobius",
                    "type": "User",
                },
                {
                    "login": "ivey",
                    "type": "superUser",
                },
                {
                    "login": "evanphx",
                    "type": "User",
                },
                {
                    "login": "vanpelt",
                    "type": "superUser",
                },
                {
                    "login": "wayneeseguin",
                    "type": "User",
                },
                {
                    "login": "brynary",
                    "type": "superUser",
                },
                {
                    "login": "kevinclark",
                    "type": "User",
                },
                {
                    "login": "technoweenie",
                    "type": "superUser",
                },
                {
                    "login": "macournoyer",
                    "type": "User",
                },
                {
                    "login": "takeo",
                    "type": "superUser",
                },
                {
                    "login": "caged",
                    "type": "User",
                },
                {
                    "login": "topfunky",
                    "type": "superUser",
                },
                {
                    "login": "anotherjesse",
                    "type": "User",
                },
                {
                    "login": "roland",
                    "type": "User",
                },
                {
                    "login": "lukas",
                    "type": "superUser",
                },
                {
                    "login": "fanvsfan",
                    "type": "User",
                },
            ],
            userType : null,
            userTypeOption : [
                {"label": "user","value" : "user"},
                {"label": "superUser","value" : "superUser"}
            ], 
        }
    }

    componentDidMount() {
        if (this.props.url.query) {
            this.setState({
                userType: this.props.url.query.userType ? {"label" : this.props.url.query.userType, "value" : this.props.url.query.userType} : null
            }, () => this.preFillData())
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.url.query.userType !== prevProps.url.query.userType)
            this.setState({
                userType: this.props.url.query.userType ? {"label" : this.props.url.query.userType, "value" : this.props.url.query.userType} : null
            }, () => this.preFillData())
    }

    preFillData = () => {
        console.log(this.state.filter)
        const userList = [...this.state.dummyList], data = [];
        if (this.state.userType) {
            userList.map((i) => {
                if (i.type === this.state.userType.value) {
                    data.push(i);
                }
                return i
            })
        }
        this.setState({
            userList: data.length > 0 ? data : userList
        })
    }

    handleChange=(el)=>{
        this.setState({
            userType : el
        },()=>{
            Router.pushRoute('/user?userType=' + el.value)
        })
    }

    render() {
        const divStyle= {
            padding : "10px",
            margin : "10px",
            border :"1px solid #f7f7f7",
            width : "20%",
            backgroundColor : "#d9d9d9",
        }, 
        divStyle1={
            padding : "10px",
            margin : "10px",
            width : "20%",
        }
        return (
            <div style={{width :"100%"}}>
                <div style={divStyle1}>
                <Select
                    placeholder="Apply filter"
                    value={this.state.userType}
                    onChange={this.handleChange}
                    options={this.state.userTypeOption}
                />
                </div>
                {this.state.userList.map((i,index) => {
                    return (
                        <div style={divStyle} key={index}>
                            {i.login}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default User;