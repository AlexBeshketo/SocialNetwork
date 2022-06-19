import {useForm} from "react-hook-form";
import {Button, Icon, TextField} from "@mui/material";
import p from "../Posts.module.css";
import addform from "../Posts.module.css";
import React from "react";


type LoginUserModelType = {
    post: string,

};

type AddPostFormType = {
    addPost: (newPostBody: string) => void
}


export function AddPostForm({addPost}: AddPostFormType) {


    const {register, handleSubmit, resetField, formState: {errors}} = useForm<LoginUserModelType>();


    const onSubmit = handleSubmit(data => {
        addPost(data.post)
        console.log(data.post)
        resetField('post')
    })


    return <>
        <form onSubmit={onSubmit}>
            <div className={addform.flex_container}>


                <div className={addform.text_field}>
                    <TextField
                        {...register("post", {required: true, maxLength: 10})}
                        error={!!errors.post}
                        type='text'
                        id="outlined-multiline-static"
                        label="Enter your message"
                        multiline
                        color={"info"}
                        style={{width: "100%"}}
                        rows={6}

                    />
                </div>

                <div className={p.btn_container}>
                    <div className={p.button}>
                        <Button className={p.btn}
                                style={{backgroundColor: '#6c7272'}}
                                type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                        >Add Post </Button>
                    </div>

                    <div className={p.image_upload}>

                        <Icon/>

                    </div>

                </div>


            </div>
        </form>
    </>
}

