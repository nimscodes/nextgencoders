import PostPage from "@/components/post_page/PostPage";

function Post({ post }) {
    return <PostPage post={post} />;
  }
  
  export async function getServerSideProps(context) {
    const { pid } = context.query;
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;
  
    try {
      const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts/getPostById?id=${pid}`);
      const { post } = await res.json();
  
      return { props: { post } };
    } catch (error) {
      console.error(error);
      return { props: {} };
    }
  }
  
  export default Post;
  