import React from "react";
const AffiliateCard = React.forwardRef(
  ({ image, title, link, buttonText }, ref) => (
    <div
      ref={ref}
      className="cardGridAffiliates popOut compartmentStackedLayout boxShadow1 borderRadius2 mb60"
    >
      <div className="absoluteTopCenter affiliateButton maxWidtht160">
        <a href={link} className="ctaButtonMes2 colorReg2 noWrap">
          {buttonText}
        </a>
      </div>
      <picture className="img_fit">
        <source media="(min-width: 768px)" srcSet={image} />
        <img src={image} alt={title} title={title} className="img_fit4" />
      </picture>
    </div>
  )
);

export default AffiliateCard;
