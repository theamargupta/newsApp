export const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }
  console.log(posts);
  return posts.filter((post) => {
    const postTitle = post.title.props.children.toLowerCase();
    const postSource = post.source.props.children.toLowerCase();
    return (
      postTitle.indexOf(query.toLowerCase()) !== -1 ||
      postSource.indexOf(query.toLowerCase()) !== -1
    );
  });
};
