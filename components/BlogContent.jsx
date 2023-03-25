import BlogCard from "@/components/BlogCard";
import { GraphQLClient, gql } from "graphql-request";
import {motion as m} from "framer-motion"

// const graphcms = new GraphQLClient(
//   "https://api-ap-south-1.hygraph.com/v2/clfms8bxj0fwo01uk5vjpavip/master"
// );

// const QUERY = gql`
// }
//  Posts {
//   posts {
//     createdAt
//     datePublished
//     id
//     publishedAt
//     slug
//     title
//     updatedAt
//   }
// }
// `;

// export async function getStaticProps() {
//   const { posts } = await graphcms.request(QUERY);
//   return {
//     props: {
//       posts,
//     },
//     revalidate: 1,
//   };
// }

export default function BlogContent() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      {/* {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))} */}

      <m.h1 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 1, duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
      className="text-sm md:text-5xl font-RobotoMono font-light glow">Wasath is still writing : </m.h1>

    </div>
  );
}
