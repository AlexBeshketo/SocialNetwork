
// Types
export type ProfilePageType = {
    posts: Array<PostsPropsType>,
    newPost: string,
    profile: ProfileType

}
export type  ProfileType= {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string,
        "website":  string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null,
        "linkedin" : string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number,
    "photos": {
        "small": string | null,
        "large":  string | null
    }
}

export type PostsPropsType = {
    id: number,
    message: string,
    like: number,
    follow: number
}



const initialStateOfProfileReducer: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 2, follow: 2},
        {id: 2, message: 'Its my first post ', like: 1, follow: 2},
    ],
    newPost: 'It-kamasutra',
    profile: {
        "aboutMe": 'dfg',
        "contacts": {
            "linkedin" : 'dgr',
            "facebook": 'dfg',
            "website": 'dfg',
            "vk": 'dfg',
            "twitter": 'dfg',
            "instagram": 'dfg',
            "youtube": 'dfg',
            "github": 'dfg',
            "mainLink": 'dfg'
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": 'dfg',
        "fullName": 'dfg',
        "userId": 4,
        "photos": {
            "small": 'dfg',
            "large": 'dfg'
        }
    }
}

export const profileReducer = (state: ProfilePageType = initialStateOfProfileReducer, action: profileReducerActionsType): ProfilePageType => {
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
        case "SET-USER-PROFILE" :
            return {...state, profile: action.profile}

        default :
            return state
    }
}

export type profileReducerActionsType= addPostActionCreatorType | updatePostActionCreatorType | setUserProfileCreatorType
type addPostActionCreatorType= ReturnType<typeof  addPost>
type updatePostActionCreatorType= ReturnType<typeof  updatePost>
type setUserProfileCreatorType= ReturnType<typeof  setUserProfile>

export const addPost = () => {
    return {type: "ADD-POST"} as const
}

export const updatePost = (newText: string) => {
    return {
        type: "UPDATE-POST",
        newText: newText
    } as const;
}

export const setUserProfile = (profile:any) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const;
}