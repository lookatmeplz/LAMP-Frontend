import React from "react";
import DiaryProps from "./DiaryProps";
import './Diary.scss'

const getDay = (date: Date) => {
  return (
    <span>{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일</span>
  )
};

const Diary = ({id, author, date, title, content}: DiaryProps) => {
  return (
    <li className={"Diary " + (author === 'khz' ? ' right' : ' left')}>
      <h2>{title}</h2>
      <small>{author}</small>
      <small>{getDay(date)}</small>
      <br/>
      <p>{content}</p>
    </li>
  )
};

Diary.defaultProps = {
  author: 'unknown',
  date: new Date(),
  title: 'unknown title',
  content: 'unknown content'
};

export default Diary;
