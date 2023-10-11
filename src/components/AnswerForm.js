import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from '@mui/material';

import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
function AnswerForm() {
    const [postAnswer, setPostAnswer] = useState({
        t_name: "",
        answer: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setPostAnswer((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/api/post/answer", postAnswer);
            navigate("/Student");
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
                    name="t_name"
                />
                <TextField
                    label="回答内容"
                    sx={{ m: 0.8, width: '55ch' }}
                    onChange={handleChange}
                    name="answer"
                />     
            </div>
       </Box>
        <Button variant="outlined" onClick={handleClick} sx={{ m: 0.8, width: '17ch' }} endIcon={<LiaChalkboardTeacherSolid />} >回答を送信</Button>
        
    </div>
  )
}

export default AnswerForm