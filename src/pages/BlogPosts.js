import React, { useRef, useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import PopInAnimation from "../animations/PopAnimation.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import Footer from "../components/Footer.js";
import DOMPurify from "dompurify";
import BlogCard from "../miscellaneous/blogs/blogCard.js";
import { useParams } from "react-router-dom";
import blogs from "../miscellaneous/blogs/blogsCarouselContents.js";
// import client from "../api/SanityClient.js";
import { PortableText } from "@portabletext/react";

const BlogPosts = () => {
  const blogCardRefs = usePopAnimation();
  const { slug } = useParams();

  const [blog, setBlog] = useState([]);
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    if (!slug) return; // Ensure slug exists before fetching

    const fetchPostAndMorePosts = async () => {
      try {
        const postQuery = `https://7ntkp20u.api.sanity.io/v2022-03-07/data/query/production?query=${encodeURIComponent(
          `*[_type == "Bet88Posts" && slug.current == "${slug}"][0]{title, description, body, publishedAt, featuredImage{asset->{url}}}`
        )}`;

        const otherPostsQuery = `https://7ntkp20u.api.sanity.io/v2022-03-07/data/query/production?query=${encodeURIComponent(
          `*[_type == "Bet88Posts" && slug.current != "${slug}"] | order(_createdAt desc) {_id, title, slug, description, featuredImage{asset->{url}}}`
        )}`;

        // Fetch both queries
        const [postRes, otherPostsRes] = await Promise.all([
          fetch(postQuery),
          fetch(otherPostsQuery),
        ]);

        // Parse JSON responses
        const postData = await postRes.json();
        const otherPostsData = await otherPostsRes.json();

        // Log for debugging purposes
        console.log("Fetched Post:", postData?.result);
        console.log("Other Posts:", otherPostsData?.result);

        // Set state with the fetched data
        setBlog(postData?.result || null); // If postData.result doesn't exist, set null
        setMorePosts(otherPostsData?.result || []); // If otherPostsData.result doesn't exist, set empty array
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };

    fetchPostAndMorePosts();
  }, [slug]); // Runs when slug changes

  if (!blog) {
    return <h2>404 - Blog Not Found</h2>;
  }

  const customComponents = {
    block: {
      normal: ({ children }) => (
        <p className="descriptions colorRegShadow textAlignmentLeft">
          {children}
        </p>
      ),
      h2: ({ children }) => (
        <h2 className="heading2 textAlignmentLeft colorSec">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="heading3 textAlignmentLeft colorSec">{children}</h3>
      ),
      h5: ({ children }) => (
        <h5
          className="heading4 textAlignmentLeft colorSec"
          style={{ color: "#ffff", marginBlock: "8px" }}>
          {children}
        </h5>
      ),
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?.url) return null; // Handle missing image safely

        return (
          <picture className="img_fit mtb20">
            <source media="(min-width: 768px)" srcSet={value.asset.url} />
            <img
              src={value.asset.url}
              alt="Blog Image"
              className="imageBlogSub"
              loading="lazy"
            />
          </picture>
        );
      },

      link: ({ value }) => {
        return (
          <a href={value.href} target="_blank" className="colorPri">
            {value.children}
          </a>
        );
      },

      bonusButtonContainer: () => <div className="bonusButtonContainer"></div>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mlr20 descriptions colorRegShadow textAlignmentLeft">
          {React.Children.map(children, (child) => (
            <li style={{ listStyleType: "disc", marginBlock: "8px" }}>
              {child}
            </li>
          ))}
        </ul>
      ),

      number: ({ children }) => (
        <ol className="mlr20 descriptions colorRegShadow textAlignmentLeft">
          {React.Children.map(children, (child) => (
            <li style={{ listStyleType: "disc", marginBlock: "8px" }}>
              {child}
            </li>
          ))}
        </ol>
      ),
    },
  };

  return (
    <div key={slug}>
      <Header />
      <section className="dualCompartmentTop6040 plr10">
        <div className="singleCompartment ptb60 overflowXHorizontalHidden mt150spec">
          <div className="compartmentStackedLayout mb60">
            <div className="blogPost">
              <header>
                <h1 className="heading1 colorPri pb10 textAlignmentLeft">
                  {blog.title}
                </h1>
                <p className="metadescriptions mb30 colorSec textAlignmentLeft">
                  Betso88 Writer <strong>&bull;</strong>{" "}
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <picture className="img_fit mb20">
                  <source
                    media="(min-width: 768px)"
                    srcSet={blog?.featuredImage?.asset.url}
                  />
                  <img src={blog.image} alt={blog.title} className="img_fit3" />
                </picture>
              </header>
              <main>
                <div className="blogContent">
                  {/* {renderContentWithComponents(blog.body)} */}
                  {/* Render PortableText with the customized components */}
                  <PortableText
                    value={blog.body}
                    components={customComponents}
                  />
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="singleCompartment ptb60 plr10 overflowXHorizontalHidden mt150spec">
          <aside>
            <h4 class="heading4 pb20 textAlignmentLeft colorSec">More</h4>
            {/* Blog Card Grid */}
            <div className="flexboxGrid ">
              {morePosts?.length === 0 ? (
                <p>No more posts available.</p>
              ) : (
                morePosts?.map((blogs, index) => (
                  <BlogCard
                    key={blogs._id}
                    ref={(el) => (blogCardRefs.current[index] = el)}
                    image={blogs?.featuredImage?.asset.url}
                    title={
                      blogs.title.length > 40
                        ? `${blogs.title.substring(0, 40)} ...`
                        : blogs.title
                    }
                    description={
                      blogs.description.length > 100
                        ? `${blogs.description.substring(0, 80)} ...`
                        : blogs.description
                    }
                    link={`/blogs/${blogs.slug.current}`}
                  />
                ))
              )}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPosts;
