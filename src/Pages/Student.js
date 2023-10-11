import React, {useEffect, useState} from "react";
import axios from 'axios';
import QuestionForm from "../components/QuestionForm";

function Student() {
  const [AnswerList, setAnswerList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get/answer").then((response) => {
      setAnswerList(response.data);
    });
  }, []);
  return (
    <>
    <div className="RouteContent">
      <div>
        <h4>質問する</h4>
        <QuestionForm />
        
      </div>
      
      <div className='TeacherContent'>
        <br />
        <h4>回答一覧</h4>
        <ul>
          {AnswerList.map((val, index) => {
            return <li className="answerlist" key={index}>{val.answer}</li>
          })}
        
        </ul>
      </div>
    </div>
    </>

  )
}

export default Student