import {v1} from "uuid";

const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"; //изменить состояние нового поста
const SEND_MESSAGE = "SEND_MESSAGE";

type updateNewMessageAction = {
    type:typeof UPDATE_NEW_MESSAGE,
    newMessage: string
}
type sendMessageAction = {
    type:typeof SEND_MESSAGE
}

type actionType = updateNewMessageAction | sendMessageAction
export type  DialogDataType = {
    dialogData:dialogDataType[],
    messages:MessageDataType[],
    newMessage:string
}
 export type dialogDataType = {
    id:string,
    name:string,
    image:string
}

export type MessageDataType={
    id:string,
    message:string,
    image:string
}


let initialState = {
    dialogData: [
        {
            id: v1(),
            name: "Pavel",
            image: "data:image/jpeg;base64,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"
        },
        {
            id: v1(),
            name: "Andrey",
            image: "data:image/png;base64,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"
        },
        {id: v1(), name: "Svetlana", image: "https://image.flaticon.com/icons/png/512/53/53166.png"},
        {
            id: v1(),
            name: "Alex",
            image: "https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png"
        },
        {
            id: v1(),
            name: "Dmitriy",
            image: "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
        }
    ],
    messages: [
        {
            id: v1(),
            message: "Hey, i am Pavel",
            image: "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
        },
        {
            id: v1(),
            message: "How are u?",
            image: "data:image/jpeg;base64,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"
        },
        {
            id: v1(),
            message: "What happens?",
            image: "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
        },
        {
            id: v1(),
            message: "Ahahaha, really?",
            image: "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
        }
    ],
    newMessage: "",
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {...state, newMessage: action.newMessage}

        case SEND_MESSAGE:
            let imageURL = "https://img2.freepng.ru/20180403/veq/kisspng-avatar-male-suit-clip-art-gender-5ac3b88ecd07e6.7368561215227762068398.jpg"
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.newMessage, image: imageURL}],
                newMessage: ''
            };
    }
    return state;
}

export const updateNewMessageActionCreator = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})