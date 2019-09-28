import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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