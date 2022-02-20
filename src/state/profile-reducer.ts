import {ActionTypes, PostsPropsType, ProfilePageType} from "./state";

export const addPostActionCreator = () => {
    return {type: "ADD-POST"} as const
}


export const updatePostActionCreator = (newText: string) => {
    return {
        type: "UPDATE-POST",
        newText: newText
    } as const;
}


const initialStateOfProfileReducer = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 2, follow: 2},
        {id: 2, message: 'Its my first post ', like: 1, follow: 2},
    ],
        newPost: 'It-kamasutra'
}

export const profileReducer = (profilePage: ProfilePageType=initialStateOfProfileReducer, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsPropsType = {
                id: new Date().getTime(),
                message: profilePage.newPost,
                like: 0,
                follow: 0
            };
            profilePage.posts.push(newPost)
            profilePage.newPost = '';
            return profilePage

        case "UPDATE-POST" :
            profilePage.newPost = action.newText;
            return profilePage
        default:
            return profilePage
    }
}



