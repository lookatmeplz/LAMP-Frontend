import React from "react";
import './TimeLine.scss'
import DiaryProps from "./DiaryProps";
import Diary from "./Diary";


interface TimeLineState {
  diary: DiaryProps[];
}

class TimeLine extends React.Component<{}, TimeLineState> {
  isTop: boolean = false;
  index: number = 0;
  constructor(props: {}) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this)
  }

  state: TimeLineState = {
    diary: []
  };

  private reloadData() : boolean {
    let diary: DiaryProps = {
      id: this.index++,
      author: 'khz',
      date: new Date(),
      title: 'Header',
      content: 'contents'
    };
    if (this.index % 2 === 0)
      diary.author = 'kmz';

    this.state.diary.push(diary);
    this.setState({
      diary: this.state.diary
    });
    this.isTop = false;
    return true;
  }

  private scrollToTop() : void {
    let scrollTop: number = document.documentElement.scrollTop;
    let height: number = document.documentElement.scrollHeight;
    let current_x: number = document.documentElement.scrollLeft;

     if (scrollTop === 0 && !this.isTop) {
      this.isTop = true;
      if (!this.reloadData())
        return;
      window.scrollTo(current_x,document.documentElement.scrollHeight-height);
    }
  }

  componentDidMount() : void {
    /* TODO: Get the information from server */
    for (let i = 0; i < 20; ++i)
      this.reloadData();

    window.addEventListener('scroll', this.scrollToTop);
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.scrollToTop);
  }

  render() {
    return (
      <div className="TimeLine">
        <ul>
          {this.state.diary.slice(0).reverse().map((diary) => {
            return (
              // <h2>{diary.id}</h2>
              <Diary id={diary.id}
                     author={diary.author}
                     date={diary.date}
                     title={diary.title}
                     content={diary.content}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TimeLine;
