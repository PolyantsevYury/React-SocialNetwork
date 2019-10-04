import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      follow: (userID) => {
          dispatch(followAC(userID));
      },
      unfollow: (userID) => {
          dispatch(unfollowAC(userID));
      },
      setUsers: (users) => {
          dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
          dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalUsersCount: (totalCount) => {
          dispatch(setTotalUsersCountAC(totalCount));
      }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Users);