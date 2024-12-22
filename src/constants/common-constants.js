export const getStoriesURL = (storyType) => `https://hacker-news.firebaseio.com/v0/${storyType}.json`;

export const getStoryDetailsURL = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const STORIES_PER_PAGE = 20;
