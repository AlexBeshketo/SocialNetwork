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

export const profileReducer = (profilePage: ProfilePageType, action: ActionTypes) => {
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



