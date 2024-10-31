// import React from "react";

// const tablesCard = React.forwardRef(
//   ({ image, title, description, style }, ref) => (
//     <div
//       ref={ref}
//       className="cardGridTableGames popOut compartmentStackedLayout bgRadialGradientDark1 boxShadow1 borderRadius2"
//       style={style}
//     >
//       <picture className="img_fit">
//         <source media="(min-width: 768px)" srcSet={image} />
//         <img src={image} alt={title} title={title} className="img_fit3" />
//       </picture>
//       <div className="textAlignmentLeft plr10">
//         <h4 className="heading4 pt20 pb10 colorPriDarkShadow">{title}</h4>
//         <p className="descriptions colorRegShadow pb10">
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
//       </div>
//     </div>
//   )
// );

// export default tablesCard;


import React, { useEffect, useState } from "react";

const TablesCard = React.forwardRef(
  ({ image, title, description, minHeight: passedMinHeight }, ref) => {
    const [minHeight, setMinHeight] = useState(passedMinHeight);

    useEffect(() => {
      const updateMinHeight = () => {
        if (window.innerWidth <= 768) {
          // If it's a mobile screen, auto-adjust the minHeight
          setMinHeight("auto"); // Set to auto for mobile
        } else {
          // Use the passed minHeight for larger screens
          setMinHeight(passedMinHeight);
        }
      };

      // Set the minHeight when the component mounts
      updateMinHeight();

      // Listen to window resize events
      window.addEventListener("resize", updateMinHeight);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateMinHeight);
      };
    }, [passedMinHeight]); // Effect should run when passedMinHeight changes

    return (
      <div
        ref={ref}
        className="cardGridTableGames popOut compartmentStackedLayout bgRadialGradientDark1 boxShadow1 borderRadius2"
        style={{ minHeight }} // Dynamically apply the minHeight
      >
        <picture className="img_fit">
          <source media="(min-width: 768px)" srcSet={image} />
          <img src={image} alt={title} title={title} className="img_fit3" />
        </picture>
        <div className="textAlignmentLeft plr10">
          <h4 className="heading4 pt20 pb10 colorPriDarkShadow">{title}</h4>
          <p className="descriptions colorRegShadow pb10">
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
                      }
                    >
                      {part.replace(/<\/?span[^>]*>/g, "")}
                    </span>
                  );
                }
                return part;
              })}
          </p>
        </div>
      </div>
    );
  }
);

export default TablesCard;
