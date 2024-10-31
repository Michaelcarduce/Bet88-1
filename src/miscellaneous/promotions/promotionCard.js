// import React from "react";

// const PromotionCard = React.forwardRef(({ image, title, description }, ref) => (
//   <div
//     ref={ref}
//     className="cardGridPromotion popOut compartmentStackedLayout boxShadow1 borderRadius6"
//   >
//     <picture className="img_fit">
//       <source media="(min-width: 768px)" srcSet={image} />
//       <img src={image} alt={title} title={title} className="img_fit3" />
//     </picture>
//     <div className="textAlignmentLeft plr10">
//       <h4 className="heading4 pt20 pb10 colorPriDarkShadow minHeight100">
//         {title}
//       </h4>
//       <p className="descriptions colorRegShadow pb10">
//         {description.split(/(<span[^>]*>.*?<\/span>)/g).map((part, index) => {
//           if (part.match(/<span[^>]*>.*?<\/span>/)) {
//             return (
//               <span
//                 key={index}
//                 className={
//                   part.includes("fontWeightBold")
//                     ? "fontWeightBold colorPri"
//                     : ""
//                 }
//               >
//                 {part.replace(/<\/?span[^>]*>/g, "")}
//               </span>
//             );
//           }
//           return part;
//         })}
//       </p>
//     </div>
//   </div>
// ));

// export default PromotionCard;

///////////////

// import React from "react";

// const PromotionCard = React.forwardRef(
//   ({ image, title, link, description, buttonText }, ref) => (
//     <div
//       ref={ref}
//       className="cardGridPromotion popOut compartmentStackedLayout boxShadow1 borderRadius6"
//     >
//       <picture className="img_fit">
//         <source media="(min-width: 768px)" srcSet={image} />
//         <img src={image} alt={title} title={title} className="img_fit3" />
//       </picture>
//       <div className="textAlignmentLeft plr20">
//         <h4 className="heading4 ptb20 colorPriDarkShadow minHeight110">
//           {title}
//         </h4>
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
//                   }
//                 >
//                   {part.replace(/<\/?span[^>]*>/g, "")}
//                 </span>
//               );
//             }
//             return part;
//           })}
//         </p>
//         <div className="ctaButton maxWidtht120">
//           <a href={link} className="ctaButtonMes colorReg2 noWrap">
//             {buttonText}
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// );

// export default PromotionCard;

import React from "react";

const PromotionCard = React.forwardRef(
  ({ image, title, link, description, buttonText }, ref) => {
    // Helper function to truncate the description
    const truncateDescription = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "..."; // Add ellipsis if it exceeds maxLength
      }
      return text;
    };

    return (
      <div
        ref={ref}
        className="cardGridPromotion popOut compartmentStackedLayout boxShadow1 borderRadius6"
      >
        <picture className="img_fit">
          <source media="(min-width: 768px)" srcSet={image} />
          <img src={image} alt={title} title={title} className="img_fit3" />
        </picture>
        <div className="textAlignmentLeft plr20">
          <h4 className="heading4 ptb20 colorPriDarkShadow minHeight110">
            {title}
          </h4>
          <p className="descriptions colorRegShadow pb20">
            {truncateDescription(
              description
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
                        }
                      >
                        {part.replace(/<\/?span[^>]*>/g, "")}
                      </span>
                    );
                  }
                  return part;
                })
                .join(""), // Joining back the parts
              150 // Maximum length
            )}
          </p>
          <div className="ctaButton maxWidtht120">
            <a href={link} className="ctaButtonMes colorReg2 noWrap">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default PromotionCard;
