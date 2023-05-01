import { GetServerSideProps } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get all posts from the API

  // Create a new SitemapStream
  const smStream = new SitemapStream({
    hostname: "https://agenone.vercel.app",
  });

  smStream.write({
    url: "/",
    changefreq: "daily",
    priority: 1,
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream.pipe(createGzip()));

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
