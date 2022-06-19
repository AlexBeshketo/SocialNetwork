import React from "react";
import {useForm} from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';

type LoginUserModelType = {
    text: string,

};

type MessageFormType = {
    addNewMessage: (newMessageBody: string) => void
}


const MessageForm = ({addNewMessage}: MessageFormType) => {

    const {register,resetField ,handleSubmit, formState: {errors}} = useForm<LoginUserModelType>();
    // get Values- odin iz tipov react hook form


    const onSubmit = handleSubmit(data => {
        console.log(data.text)
        addNewMessage(data.text)
        resetField('text')
    })


    return (

        <div>

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                {/*<textarea onChange={props.onChange} value={props.newMessagesBody} placeholder={'Enter your message'}>ADD message</textarea>*/}
                <form onSubmit={onSubmit}>

                    <TextField
                        {...register("text", {required: true, maxLength: 30})}
                        error={!!errors.text}
                        type='text'
                        margin="none"
                        style={{width: '300px'}}
                        rows={6}
                        id="outlined-multiline-static"
                        label="Enter your message"
                        multiline
                        fullWidth
                        // autoComplete="email"
                        autoFocus
                    />
                    <Button
                        style={{backgroundColor: '#6c7272'}}
                        type="submit"
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    > Send Message </Button>

                </form>


            </Container>


            {/*<div>*/}
            {/*    <button onClick={props.addPost}>Add message</button>*/}
            {/*</div>*/}
        </div>

    );
};

export default MessageForm;


