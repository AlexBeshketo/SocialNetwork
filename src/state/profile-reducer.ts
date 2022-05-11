import {ActionTypes} from "./redux-store";


// Types
export type ProfilePageType = {
    posts: Array<PostsPropsType>,
    newPost: string
}
export type PostsPropsType = {
    id: number,
    message: string,
    like: number,
    follow: number
}
//


export const addPostActionCreator = () => {
    return {type: "ADD-POST"} as const
}

export const updatePostActionCreator = (newText: string) => {
    return {
        type: "UPDATE-POST",
        newText: newText
    } as const;
}


const initialStateOfProfileReducer: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 2, follow: 2},
        {id: 2, message: 'Its my first post ', like: 1, follow: 2},
    ],
    newPost: 'It-kamasutra'
}


export const profileReducer = (state: ProfilePageType = initialStateOfProfileReducer, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: state.newPost,
                like: 0,
                follow: 0
            };
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost)
            // stateCopy.newPost = '';
            return {...state, posts: [...state.posts, newPost]}

        case "UPDATE-POST" :
            return {...state, newPost: action.newText}

        default :
            return state
    }
}



