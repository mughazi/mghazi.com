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
          <br />
          <main>
            <p>Hi, I'm Fikri from Portsmouth, NH.</p>

            <br />

            <p>I'm a programmer learning about</p>
            <ul>
              <li>
                <strong>
                  Supervised Machine Learning: Regression and Classification
                </strong>
              </li>
              <li>
                and <strong>Business Administration</strong>
              </li>
            </ul>

            <br />

            <p>Right now I'm working on a couple of exiting side projects</p>
            <ul>
              <li>
                <h4>ChatGPT desktop client template</h4>
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
                <ul
                  style={{
                    gap: 32,
                    maxWidth: "85vw",
                  }}
                >
                  <li>
                    <iframe
                      width="100%"
                      height="215"
                      src="https://www.youtube.com/embed/kbYD2EDap3s?si=vTaAihdeADID3O_J"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </li>
                  <li>
                    <iframe
                      width="100%"
                      height="215"
                      src="https://www.youtube.com/embed/mRjr8Kv0owU?si=DJKuWNZ2iu2ja6Qr"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
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
