import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;