import React from "react";
// import "../../styles/global.css";
const BlogCard = React.forwardRef(
  ({ image, title, description, link, buttonText }, ref) => (
    <div
      ref={ref}
      className="cardGridBlog popOut compartmentStackedLayout boxShadow1 borderRadius2"
    >
      <picture className="img_fit">
        <source media="(min-width: 768px)" srcSet={image} />
        <img src={image} alt={title} title={title} className="img_fit3" />
      </picture>
      <div className="textAlignmentLeft plr10">
        <h4 className="heading4 pt20 pb10 colorPriDarkShadow">{title}</h4>
        {/* <p className="descriptions colorRegShadow pb10" dangerouslySetInnerHTML={{ __html: description }}></p> */}
        <p className="descriptions colorRegShadow pb10 minHeight150">
          {description.split(/(<span[^>]*>.*?<\/span>)/g).map((part, index) => {
            if (part.match(/<span[^>]*>.*?<\/span>/)) {
              return (
                <span
                  key={index}
                  className={
                    part.includes("fontWeightBold")
                      ? "fontWeightBold colorPri"
                      : ""
                  }
                >
                  {part.replace(/<\/?span[^>]*>/g, "")}
                </span>
              );
            }
            return part;
          })}
        </p>
        <div className="ctaButton maxWidtht160">
          <a href={link} className="ctaButtonMes colorReg2 noWrap">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
);

export default BlogCard;
