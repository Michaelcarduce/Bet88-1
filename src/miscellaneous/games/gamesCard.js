import React from "react";

const gamesCard = React.forwardRef(({ image, title, description }, ref) => (
  <div
    ref={ref}
    className="cardGridGames popOut compartmentStackedLayout bgRadialGradientDark1 boxShadow1 borderRadius2"
  >
    <picture className="img_fit">
      <source media="(min-width: 768px)" srcSet={image} />
      <img src={image} alt={title} title={title} className="img_fit3" />
    </picture>
    <div className="textAlignmentLeft plr10">
      <h4 className="heading4 pt20 pb10 colorPriDarkShadow">{title}</h4>
      <p className="descriptions colorRegShadow pb10">
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
    </div>
  </div>
));

export default gamesCard;
