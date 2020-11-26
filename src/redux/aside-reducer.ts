import {ActionsTypes, AsideStateType} from "./store";
import {v1} from "uuid";

let initialState = {
    asideFriends: [
        {
            id: v1(),
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Ghz_3vVX362NspWGVByszfbkVlJ77tisTQ&usqp=CAU',
            name: 'Pavel'
        },
        {
            id: v1(),
            avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
            name: 'Vika'
        },
        {
            id: v1(),
            avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg',
            name: 'Alex'
        }
    ]
}
export const asideReducer = (state: AsideStateType = initialState, action: ActionsTypes) => {

    return state
}