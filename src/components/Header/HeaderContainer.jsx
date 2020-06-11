import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {getUserProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();

        let userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId, true);
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.authorizedProfile,
    authorizedUserId: state.auth.userId,
});

export default connect(mapStateToProps, {getAuthUserData, getUserProfile}) (HeaderContainer);