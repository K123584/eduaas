import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';


function QuestionForm() {
    const [postQuestion, setPostQuestion] = useState({
        s_name: "",
        question: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPostQuestion((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/api/post/question", postQuestion);
            navigate("/Teacher");
        }catch(err){
            console.log(err);
        }
    }

    return (
    <div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                <TextField
                    label="名前"
                    sx={{ m: 0.8, width: '20ch' }}
                    onChange={handleChange}
                    name="s_name"
                />
                <TextField
                    label="質問内容"
                    sx={{ m: 1, width: '55ch' }}
                    onChange={handleChange}
                    name="question"
                    
                />
                </div>
        </Box>
        <Button variant="outlined" onClick={handleClick} endIcon={<CreateIcon />} >質問を送信</Button>
    </div>
    )

}

export default QuestionForm;