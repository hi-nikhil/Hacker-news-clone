import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StoryList.css";

import { getStoryDetailsURL } from "../../constants/common-constants";
import { Story } from "../story/Story";
import { Job } from "../job/Job";
import Pagination from "../pagination/Pagination";
import ShimmerLoader from "../shimmer-loader/ShimmerLoader";
import { STORIES_PER_PAGE } from "../../constants/common-constants";

const StoryList = ({ allStories, isJobs }) => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const storyIds = allStories.slice((page - 1) * STORIES_PER_PAGE, page * STORIES_PER_PAGE);

      const storyDetails = await Promise.all(
        storyIds.map(async (id) => {
          const storyResponse = await axios.get(getStoryDetailsURL(id));
          return storyResponse.data;
        })
      );
      setStories(storyDetails);
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    setLoading(true);
    fetchStories();
  }, [page, allStories]);

  return (
    <div className="storyList-container">
      {loading ? (
        <ShimmerLoader />
      ) : (
        <>
          {!loading && isJobs && stories.length > 0 && (
            <div className="job-story-heading-container">
              <div className="job-story-heading">
                These are jobs at YC startups. See more at&nbsp;
                <span>
                  <a
                    className="job-story-heading-link"
                    href="https://www.ycombinator.com/jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ycombinator.com/jobs
                  </a>
                </span>
              </div>
            </div>
          )}
          {stories.map((story, index) => {
            if (isJobs) {
              return <Job key={story.id} job={story} index={(page - 1) * STORIES_PER_PAGE + index} />;
            } else {
              return <Story key={story.id} story={story} index={(page - 1) * STORIES_PER_PAGE + index} />;
            }
          })}
        </>
      )}
      {stories.length > 0 ? (
        <Pagination
          totalStories={allStories.length}
          storiesPerPage={STORIES_PER_PAGE}
          onPageChange={(page) => setPage(page)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default StoryList;
