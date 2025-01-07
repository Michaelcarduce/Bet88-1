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

const BlogPosts = () => {
  const blogCardRefs = usePopAnimation();
  const { slug } = useParams();
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return <h2>404 - Blog Not Found</h2>;
  }

  const sanitizeAndParseContent = (content) => {
    const sanitizedContent = DOMPurify.sanitize(content, {
      USE_PROFILES: { html: true },
    });
    const parser = new DOMParser();
    return parser.parseFromString(sanitizedContent, "text/html").body;
  };

  const renderContentWithComponents = (content) => {
    if (!content) return null;

    const parsedContent = sanitizeAndParseContent(content);
    const elements = [...parsedContent.children];

    return elements.map((element, index) => {
      if (element.classList.contains("bonusButtonContainer")) {
        // Inject custom div structure for alignment
        return (
          <PopInAnimation popDuration={1000}>
            <div className="alignment mt20 mb20" key={index}>
              <div className="ctaButton maxWidtht160 popIn2">
                <a
                  href="https://example.com"
                  className="ctaButtonMes colorReg2 noWrap"
                  target="_blank"
                  rel="noopener noreferrer">
                  Claim Bonus
                </a>
              </div>
            </div>
          </PopInAnimation>
        );
      }

      // Default fallback: Render the element as is
      return (
        <div
          dangerouslySetInnerHTML={{ __html: element.outerHTML }}
          key={index}
        />
      );
    });
  };

  // Sort blogs by id in descending order (newest to oldest)
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  return (
    <>
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
                  {blog.Author} <strong>&bull;</strong> {blog.Date}
                </p>
                <picture className="img_fit mb20">
                  <source media="(min-width: 768px)" srcSet={blog.image} />
                  <img src={blog.image} alt={blog.title} className="img_fit3" />
                </picture>
              </header>
              <main>
                <div className="blogContent">
                  {renderContentWithComponents(blog.content)}
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
              {sortedBlogs.map((blogs, index) => (
                <BlogCard
                  key={blogs.id}
                  ref={(el) => (blogCardRefs.current[index] = el)}
                  image={blogs.image}
                  title={
                    blogs.title.length > 60
                      ? `${blogs.title.substring(0, 40)} ...`
                      : blogs.title
                  }
                  link={blogs.link}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPosts;
