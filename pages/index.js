import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Header from "../components/header";
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
        <Container>
          <Header />
          <hr />
          <main>
            <p>Hi, I'm Fikri. I'm a programmer from Portsmouth, NH.</p>

            <p>I'm currently learning</p>
            <ul>
              <li>
                Supervised Machine Learning: Regression and Classification
              </li>
            </ul>

            <p>and working on some side projects</p>
            <ul>
              <li>
                ChatGPT Desktop App (status: releasing early November)
                <ul>
                  <li>
                    To do:
                    <ul>
                      <li>Settings UI</li>
                      <li>Onboarding UI</li>
                      <li>Landing page website</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </main>
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
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
