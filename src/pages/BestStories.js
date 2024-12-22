import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { getStoriesURL } from "../constants/common-constants";
import StoryList from "../components/story-list/StoryList";
import ShimmerLoader from "../components/shimmer-loader/ShimmerLoader";

const BestStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get(getStoriesURL("beststories"));
      setStories(response.data);
      setLoading(false);
    };

    fetchStories();
  }, []);

  return loading ? <ShimmerLoader /> : <StoryList allStories={stories} isJobs={false} />;
};

export default BestStories;
