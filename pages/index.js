import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Header from "../components/header";

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice();
  return (
    <>
      <Layout>
        <Head>
          <title>Fikri Ghazi</title>
        </Head>
        <Container>
          <Header />
          <article className="py-6 space-y-6">
            <p>
              Hi there—my name is Fikri, I'm a programmer from Portsmouth, NH.
            </p>
            <p>
              Please feel free to reach out if you'd like to chat. My email
              inbox is always open.
            </p>
          </article>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
