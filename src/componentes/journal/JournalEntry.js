import React from "react";
import Moment from "moment";
import { activeNote } from "../../actions/notes";
import { useDispatch } from "react-redux";

export const JournalEntry = (note) => {
  const { id, date, title, body, url } = note;
  const dispatch = useDispatch();
  const noteDate = Moment(date);
  const handleEntryClick = () => {
    dispatch(activeNote(id,note))
  }
  
  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url !== undefined && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};
