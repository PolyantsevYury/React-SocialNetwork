import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 16},
                {id: 2, message: 'It\'s my first post', likes: 24}
            ],
            newPostText: 'IT'
        },
        dialogsPage: {
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
        },
        sideBar: {
            firstFriend: [
                {img: '#', name: 'Elon'}
            ],
            secondFriend: [
                {img: '#', name: 'Mike'}
            ],
            thirdFriend: [
                {img: '#', name: 'Anton'}
            ],
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;