import React, { useEffect, useState } from "react";
// import client from "../api/SanityClient.js";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import BlogCard from "../miscellaneous/blogs/blogCard.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import Footer from "../components/Footer.js";

const Homepage = () => {
  const blogCardRefs = usePopAnimation();
  // Sort blogs by id in descending order (newest to oldest)
  // const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://7ntkp20u.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22Bet88Posts%22+%5D%7B+%0A++++_id%2C+%0A++++title%2C+%0A++++slug%2C+%0A++++description%2C+%0A++++%22featuredImage%22%3A+featuredImage.asset-%3Eurl+%0A%7D"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the relevant data is in 'data.result' (standard Sanity response)
        setPosts(data.result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    document.title = "Online Casino Update, News & Blogs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read Bet88's blogs related to Sports betting, Online Casino, Live Casino, Bonus, Promotion and more!"
      );
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(posts);

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
          {posts?.map((blogs, index) => (
            <BlogCard
              key={blogs._id}
              ref={(el) => (blogCardRefs.current[index] = el)}
              image={blogs.featuredImage}
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
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
