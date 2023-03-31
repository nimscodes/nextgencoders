import PostPage from "@/components/post_page/PostPage";

function Post({ post }) {
    return <PostPage post={post} />;
  }
  
  export async function getServerSideProps(context) {
    const { pid } = context.query;
  
    try {
      const res = await fetch(`http://localhost:3000/api/posts/getPostById?id=${pid}`);
      const { post } = await res.json();
  
      return { props: { post } };
    } catch (error) {
      console.error(error);
      return { props: {} };
    }
  }
  
  export default Post;
  