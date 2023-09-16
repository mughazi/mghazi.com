import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Link from "next/link";

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice();
  return (
    <>
      <Layout>
        <Head>
          <title>Fikri Ghazi</title>
        </Head>
        <div style={{ maxWidth: 780 }}>
          <header>
            <h1 style={{ fontSize: "1rem" }}>
              <Link href={"/"}>Fikri Ghazi</Link>
            </h1>
            <nav style={{ display: "flex", gap: 12 }}>
              <a href="mailto:fikri@mghazi.com">Email</a>
              <a href="https://github.com/fikrigha" target="_blank">
                GitHub
              </a>
              <a href="https://twitter.com/fikrigha" target="_blank">
                Twitter
              </a>
            </nav>
          </header>
          <br />
          <main>
            <p>
              Hi, I'm Fikri. I'm a programmer from Portsmouth, New Hampshire.
            </p>
            <p>If you want to chat, please feel free to reach out.</p>
          </main>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
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
