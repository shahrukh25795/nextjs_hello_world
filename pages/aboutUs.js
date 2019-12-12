import React, { Component } from 'react';
import { Router } from '../routes'
const queryString = require('query-string');


class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "User",
            userList: [
                {
                    "login": "mojombo",
                    "id": 1,
                    "type": "superUser",
                    "site_admin": true
                },
                {
                    "login": "defunkt",
                    "id": 2,
                    "type": "User",
                    "site_admin": true
                },
                {
                    "login": "pjhyett",
                    "id": 3,
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "wycats",
                    "id": 4,
                    "type": "superUser",
                    "site_admin": true
                },
                {
                    "login": "ezmobius",
                    "id": 5,
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "ivey",
                    "id": 6,
                    "type": "superUser",
                    "site_admin": true
                },
                {
                    "login": "evanphx",
                    "id": 7,
                    "type": "User",
                    "site_admin": true
                },
                {
                    "login": "vanpelt",
                    "id": 17,
                    "type": "superUser",
                    "site_admin": true
                },
                {
                    "login": "wayneeseguin",
                    "id": 18,
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "brynary",
                    "id": 19,
                    "type": "superUser",
                    "site_admin": false
                },
                {
                    "login": "kevinclark",
                    "id": 20,
                    "type": "User",
                    "site_admin": true
                },
                {
                    "login": "technoweenie",
                    "id": 21,
                    "type": "superUser",
                    "site_admin": false
                },
                {
                    "login": "macournoyer",
                    "id": 22,
                    "type": "User",
                    "site_admin": true
                },
                {
                    "login": "takeo",
                    "id": 23,
                    "type": "superUser",
                    "site_admin": false
                },
                {
                    "login": "caged",
                    "id": 25,
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "topfunky",
                    "id": 26,
                    "type": "superUser",
                    "site_admin": true
                },
                {
                    "login": "anotherjesse",
                    "id": 27,
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "roland",
                    "id": 28,
                    "type": "User",
                    "site_admin": true
                },
                {
                    "login": "lukas",
                    "id": 29,
                    "type": "superUser",
                    "site_admin": false
                },
                {
                    "login": "fanvsfan",
                    "id": 30,
                    "type": "User",
                    "site_admin": false
                },
            ]
        }
    }

    componentDidMount() {
        if (this.props.url.query) {
            this.setState({
                filter: this.props.url.query.site_admin ? this.props.url.query.site_admin : "User"
            }, () => this.preFillData())
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.url.query.site_admin !== prevProps.url.query.site_admin)
            this.setState({
                filter: this.props.url.query.site_admin ? this.props.url.query.site_admin : "User"
            }, () => this.preFillData())
    }

    preFillData = () => {
        console.log(this.state.filter)
        const userList = [...this.state.userList], data = [];
        if (this.state.filter === "superUser") {
            userList.map((i) => {
                if (i.type === "superUser") {
                    data.push(i);
                }
                return i
            })
        }
        this.setState({
            userList: data.length > 0 ? data : userList
        })
    }

    handleClick = (type) => {
        Router.pushRoute('/about?site_admin=' + type)
    }


    render() {
        console.log("fillter", this.state.userList)
        return (
            <div style={{ textAlign: "center" }}>
                <button type="button" onClick={() => this.handleClick("superUser")}>Add Fillter</button>
                <button type="button" onClick={() => this.handleClick("User")}>Remove Fillter</button>
                {this.state.userList.map((i) => {
                    return (
                        <div key={i.id}>
                            {i.login}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AboutUs;