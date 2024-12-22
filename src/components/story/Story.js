import "./Story.css";

import { calculateTimeDifference, getHostName } from "../../utils/common-utils";

export const Story = ({ story, index }) => {
  return (
    <div key={story.id} className="story">
      <div className="story-index-and-vote">
        <span className="story-index"> {index + 1}. </span>
        <div className="story-vote"></div>
      </div>
      <div className="story-details">
        <div className="story-title">
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
          <span className="story-host-name" onClick={() => window.open(story.url)}>
            {" "}
            ({getHostName(story.url)})
          </span>
        </div>
        <div className="story-metadata">
          <span>{story.score} points </span>
          <span>by {story.by} </span>
          <span>{calculateTimeDifference(story.time)}</span>
          <span> | hide | </span>
          <span>{story.descendants > 1 ? `${story.descendants} comments` : "discuss"}</span>
        </div>
      </div>
    </div>
  );
};
