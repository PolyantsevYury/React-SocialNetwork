const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Elon'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Anton'},
        {id: 4, name: 'Yuri'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'John'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'I\'m fine'},
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Hi'},
    ],
    newMessageText: 'New'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;