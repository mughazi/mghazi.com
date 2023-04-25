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
            <p>Hi,</p>
            <p>
              My name is Fikri Ghazi. I'm a Programmer based in Portsmouth, NH.
              I have been working as a software developer since 2017. I like
              using TypeScript, React and Python (and some C#.)
            </p>
            <p>Please feel welcome to reach out if you'd like to chat.</p>
            <p>Thank you.</p>
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
