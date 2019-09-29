import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;
//
//     let sendMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     };
//
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text));
//     };
//
//     return <Dialogs updateNewMessageText={onMessageChange} sendMessage={sendMessage} dialogsPage={state} />
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;