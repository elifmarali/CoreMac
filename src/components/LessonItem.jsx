import React, { useState, useEffect } from "react";
import "./Lessons.css"
import { useNavigate } from "react-router-dom";
function LessonItem({ lesson, id }) {
  const nav=useNavigate()
  const handleItemClick= ()=>{
    nav(`/lessonContent/${id}`)
  }
  return (
    <div className="lessonItem" onClick={handleItemClick}>
      <h2 className="itemHeader">{lesson.educationName}</h2>
      <img src={lesson.contentImageUrl} alt="" className="itemImage"/>
      <a className="itemNav">Daha fazlası için...</a>
    </div>
  );
}

export default LessonItem;
