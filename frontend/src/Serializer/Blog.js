export const toBlogPostType = (blogPost) => {
  const {
    title,
    date_published: datePublished,
    content,
    id,
  } = blogPost;

  return {
    title,
    id,
    content,
    datePublished
  };
};

export const toBlogPostWithDetailsType = (blogPostWithDetails) => {
  const {
    title,
    date_published: datePublished,
    content,
    id,
    is_public: isPublic,
    is_draft: isDraft
  } = blogPostWithDetails;

  return {
    title,
    id,
    content,
    datePublished,
    isPublic,
    isDraft
  };
};
