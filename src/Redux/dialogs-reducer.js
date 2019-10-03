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
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 1, message: newMessage}]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;