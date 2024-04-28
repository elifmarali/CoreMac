import React, { useEffect, useState } from "react";
import LessonsContext from "../context/LessonsContext";
import { useContext } from "react";
import LessonItem from "./LessonItem";
import Header from "./Header";
import "./Lessons.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Footer from "./Footer";

function Lessons() {
  const { lessons, lessonGroup } = useContext(LessonsContext);
  const [loading, setLoading] = useState(true);
console.log(lessonGroup);
  useEffect(() => {
    if (lessonGroup !== null && lessonGroup !== undefined) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [lessonGroup, lessons]);

  console.log(loading);
  return (
    <>
      <Header />
      <div className="lessons">
        {loading ? (
          <div>Yukleniyor...</div>
        ) : (
          Object.keys(lessonGroup).map((key) => (
            <div className="lesson" key={key}>
              <h2 className="lessonHeader">{key}</h2>
              <div className="lessonContainer">
                <div key={key} className="lessonItemGroup">
                  {lessonGroup[key].map((lesson, index) => (
                    <LessonItem
                      lesson={lesson}
                      key={index}
                      id={lesson.educationId}
                    />
                  ))}
                </div>{" "}
              
              </div>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Lessons;
