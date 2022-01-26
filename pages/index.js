import { ArticleCard } from "../components/card/article_card";
import { client } from "../lib/client";

export default function Home({ blog }) {
  return (
    <main className="w-full main p-8 pb-14 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
      {blog.map((blog) => {
        return <ArticleCard
          key={blog.id}
          title={blog.title}
          id={blog.id}
          image={blog.image}
          publishedAt={blog.publishedAt}
          updatedAt={blog.updatedAt}
          categorys={blog.categorys}
        />
      })}
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
