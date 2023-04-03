import NavBar from "@/components/navbar/NavBar";
import PostList from "@/components/post_list/PostList";

export default function Category({ posts, category }) {

  return (
    <div>
      <NavBar />
      <div id='header' className='w-[80%] mx-auto flex flex-col my-5'>
        <div className='font-light text-lg text-gray-700 tracking-wide px-2'>
          {category}
        </div>
        <hr className='mb-5'></hr>
      </div>
      <PostList posts={posts} />
    </div>

  )
}

export async function getServerSideProps(context) {
  const { category } = context.query;
  // let dev = process.env.NODE_ENV !== 'production';
  // let { DEV_URL, PROD_URL } = process.env;

  try {
    const res = await fetch(`api/posts/getPostByCategory?category=${category}`);
    const { posts } = await res.json();

    return { props: { posts, category } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}