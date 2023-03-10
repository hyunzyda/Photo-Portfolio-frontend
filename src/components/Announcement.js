import React, { useState } from "react";
import { getAnnouncements } from "../utils/api";

function Announcement() {
  const [announcement, setAnnouncement] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getAnnouncements(announcement);
    setAnnouncement("");
  };

  return (
    <div className="Announcement">
      <h2>공지사항</h2>
      <form onSubmit={handleSubmit}>
        <label>
          공지사항 내용:
          <textarea
            value={announcement}
            onChange={(event) => setAnnouncement(event.target.value)}
          />
        </label>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default Announcement;
