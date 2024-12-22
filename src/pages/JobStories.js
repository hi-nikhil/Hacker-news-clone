import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import StoryList from "../components/story-list/StoryList";
import { getStoriesURL } from "../constants/common-constants";
import ShimmerLoader from "../components/shimmer-loader/ShimmerLoader";

const JobStories = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(getStoriesURL("jobstories"));
      setJobs(response.data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return loading ? <ShimmerLoader /> : <StoryList allStories={jobs} isJobs={true} />;
};

export default JobStories;
