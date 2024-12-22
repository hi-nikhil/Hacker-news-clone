import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import StoryList from "../components/story-list/StoryList";
import { getStoriesURL } from "../constants/common-constants";
import ShimmerLoader from "../components/shimmer-loader/ShimmerLoader";

const NewStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get(getStoriesURL("newstories"));
      setStories(response.data);
      setLoading(false);
    };

    fetchStories();
  }, []);

  return loading ? <ShimmerLoader /> : <StoryList allStories={stories} isJobs={false} />;
};

export default NewStories;
