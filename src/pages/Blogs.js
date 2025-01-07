import React, { useRef, useEffect } from "react";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import blogs from "../miscellaneous/blogs/blogsCarouselContents.js";
import BlogCard from "../miscellaneous/blogs/blogCard.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import Footer from "../components/Footer.js";

const Homepage = () => {
  const blogCardRefs = usePopAnimation();
  // Sort blogs by id in descending order (newest to oldest)
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  return (
    <div>
      <Header />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden mt150spec">
        <div className="compartmentStackedLayout mb60">
          <h1 className="heading1 colorPri pb30">
            Bet88 Blog: Where the Action Happens
          </h1>
          <div className="bgGlassMorphism p20 borderRadius1">
            <p className="descriptions textAlignmentLeft colorReg1">
              <span className="fontWeightBold colorSec">Bet88</span> is a
              trusted online casino and sports betting platform{" "}
              <span className="fontWeightBold colorSec">
                licensed by PAGCOR
              </span>
              , the Philippine Amusement and Gaming Corporation. They are a
              pioneer in mobile gaming, offering a wide variety of casino games
              such as slots, live dealer games, and more, all accessible through
              their user-friendly mobile website and app. Whether you're at
              home, work, or traveling, Bet88 provides a thrilling and
              convenient online casino experience.
            </p>
          </div>
        </div>

        {/* Blog Card Grid */}
        <div className="flexboxGrid">
          {sortedBlogs.map((blogs, index) => (
            <BlogCard
              key={blogs.id}
              ref={(el) => (blogCardRefs.current[index] = el)}
              image={blogs.image}
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
              link={blogs.link}
              buttonText={blogs.buttonText}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
