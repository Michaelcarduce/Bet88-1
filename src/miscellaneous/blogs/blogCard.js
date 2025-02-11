// import React from "react";
// // import "../../styles/global.css";
// const BlogCard = React.forwardRef(
//   ({ image, title, description, link, buttonText }, ref) => (
//     <div
//       ref={ref}
//       className="cardGridBlog popOut compartmentStackedLayout boxShadow1 borderRadius2">
//       <picture className="img_fit">
//         <source media="(min-width: 768px)" srcSet={image} />
//         <img src={image} alt={title} title={title} className="img_fit3" />
//       </picture>
//       <div className=" plr10">
//         <h4 className="heading4 pt20 pb10 colorPriDarkShadow">{title}</h4>
//         {/* <p className="descriptions colorRegShadow pb10" dangerouslySetInnerHTML={{ __html: description }}></p> */}
//         <p className="descriptions colorRegShadow pb10 minHeight150">
//           {description.split(/(<span[^>]*>.*?<\/span>)/g).map((part, index) => {
//             if (part.match(/<span[^>]*>.*?<\/span>/)) {
//               return (
//                 <span
//                   key={index}
//                   className={
//                     part.includes("fontWeightBold")
//                       ? "fontWeightBold colorPri"
//                       : ""
//                   }>
//                   {part.replace(/<\/?span[^>]*>/g, "")}
//                 </span>
//               );
//             }
//             return part;
//           })}
//         </p>
//         <div className="alignment mt10">
//           <div className="ctaButton maxWidtht160 ">
//             <a
//               href={link}
//               className="ctaButtonMes colorReg2 noWrap"
//               target="_blank">
//               {buttonText}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// );

// export default BlogCard;

import React from "react";

const BlogCard = React.forwardRef(
  ({ image, title, description, link, buttonText }, ref) => (
    <a
      href={link}
      ref={ref}
      target="_blank"
      className="cardGridBlog compartmentStackedLayout boxShadow1 borderRadius2">
      {image && ( // Conditional rendering for image section
        <picture className="img_fit">
          <source media="(min-width: 768px)" srcSet={image} />
          <img
            src={image}
            alt={title || "Blog Image"} // Default alt text
            title={title || "Blog Image"} // Default title text
            className="img_fit3"
          />
        </picture>
      )}

      <div className="plr10 compartmentStackedLayout">
        {title && (
          <h4 className="heading4 pt20 pb10 colorPriDarkShadow">{title}</h4>
        )}

        {description && ( // Conditional rendering for description
          <p className="descriptions colorRegShadow pb10 ">
            {description
              .split(/(<span[^>]*>.*?<\/span>)/g)
              .map((part, index) => {
                if (part.match(/<span[^>]*>.*?<\/span>/)) {
                  return (
                    <span
                      key={index}
                      className={
                        part.includes("fontWeightBold")
                          ? "fontWeightBold colorPri"
                          : ""
                      }>
                      {part.replace(/<\/?span[^>]*>/g, "")}
                    </span>
                  );
                }
                return part;
              })}
          </p>
        )}

        {buttonText && ( // Conditional rendering for the link/button section
          <div className="alignment mt10">
            <div className="">
              <a className="ctaButtonMes colorSec noWrap">{buttonText || ""}</a>
            </div>
          </div>
        )}
      </div>
    </a>
  )
);

export default BlogCard;
