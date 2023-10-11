import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerForm from '../components/AnswerForm';


function Teacher() {
  const [QuestionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get/question").then((response) => {
      setQuestionList(response.data);
    });
  }, []);
  return (

      <div className="RouteContent">
        <h4>　質問リスト</h4>
        <ul>
          {QuestionList.map((val, index) => {
            return <li className="questionlist" key={index}>{val.question}<br /><p className="answer-sign">回答する</p><AnswerForm /></li>
          })}
        
        </ul>
      </div>
  )
}

export default Teacher;