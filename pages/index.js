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
                <h4>
                  Supervised Machine Learning: Regression and Classification
                </h4>
              </li>
            </ul>

            <p>and working on some side projects</p>
            <ul>
              <li>
                <h4>ChatGPT Desktop App</h4>
                <ul>
                  <li>
                    To do:
                    <ul>
                      <li>Branding</li>
                      <li>Landing page website</li>
                      <li>Testing</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h4>YouTube: Code with me</h4>
                <ul style={{ display: "flex", overflow: "scroll", gap: 32 }}>
                  <li>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/kbYD2EDap3s?si=vTaAihdeADID3O_J"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </li>
                  <li>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/mRjr8Kv0owU?si=DJKuWNZ2iu2ja6Qr"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
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
