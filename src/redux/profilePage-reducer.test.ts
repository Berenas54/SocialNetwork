import {addPostActionCreator, deletePostAC, profilePageReducer} from "./profilePage-reducer";

let State = {
    posts: [
        {id: "1", message: "My first post!", likesCount: 41},
        {id: "2", message: "Second post", likesCount: 22},
        {id: "3", message: 'I live React', likesCount: 31},
        {id: "4", message: "Awesome!!!", likesCount: 421}],
    newPostText: "",
    profile: null,
    status: ""
}


it('new post should be added ', () => {

    const action = addPostActionCreator("Test done")

    const newState = profilePageReducer(State, action)

    expect(newState.posts.length).toBe(5)

})

it('message should be corrected ', () => {

    const action = addPostActionCreator("Test done")

    const newState = profilePageReducer(State, action)

    expect(newState.posts[4].message).toBe("Test done")

})

it('post should be delete', () => {

    const action = deletePostAC("1")

    const newState = profilePageReducer(State, action)

    expect(newState.posts.length).toBe(3)

})


