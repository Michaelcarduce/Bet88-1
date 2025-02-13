import React, { useRef, useEffect } from "react";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import bingo from "../miscellaneous/bingogames/bingoCarouselContents.js";
import TablesCard from "../miscellaneous/tablegames/tablesCard.js";
import promotions from "../miscellaneous/promotions/promotionCarouselContents.js";
import PromotionCard from "../miscellaneous/promotions/promotionCard.js";
import affiliates from "../miscellaneous/affiliates/affiliatesCarouselContents.js";
import AffiliateCard from "../miscellaneous/affiliates/affiliateCard.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import SlideAnimation from "../animations/SlideAnimation.js";
import PopInAnimation from "../animations/PopAnimation.js";
import FAQAnimation from "../animations/FAQAnimation.js";
import Footer from "../components/Footer.js";

const Promotion = () => {
  const promotionCardRefs = usePopAnimation();
  const tablesCardRefs = usePopAnimation();
  const affiliateCardRefs = usePopAnimation();

  useEffect(() => {
    document.title = "Bet88 Promotions | Get 200% WELCOME BONUS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Are you willing to grab our excellent and special offers and bonuses section? Join the exciting world of Bet88 online Casino now!"
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://bet88-casino.vip/promotion");
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", "https://bet88-casino.vip/promotion");
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden mt150spec">
        <div className="compartmentStackedLayout">
          <h1 className="heading1 colorPri pb30">
            Bet88: The Premier Online Casino in the Philippines
          </h1>
          <div className="bgGlassMorphism p20 borderRadius1 mb60">
            <p className="descriptions textAlignmentLeft colorReg1">
              Greetings at Bet88 – The Philippines’ favorite site for people who
              enjoy casinos online! Regardless if you’re a regular player or a
              beginner in the world of{" "}
              <a
                href="https://bet88-casino.vip/"
                target="_blank"
                className="fontWeightBold anchorLink">
                online casinos
              </a>
              , Bet88 is a perfect and fun guide through the world of{" "}
              <a
                href="https://bet88-casino.vip/live-casino"
                target="_blank"
                className="fontWeightBold anchorLink">
                online gaming
              </a>
              . Bet88 is the optimal option for those players who are in search
              of a reliable and profitable online casino with a great number of
              games, bonuses, and safe payment methods such as GCash.
            </p>
          </div>

          <h2 className="heading2 colorSec pb30">
            Bet88 Promotions: Exciting Offers for New and Returning Players
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            In the bonuses and promotions section, Bet88 is pleased to present
            some of the most marvellous bonuses available in the internet gaming
            zone. Of course, there will always be some function that will pique
            a player's interest no matter how frequent their gaming is. See the
            following for our most recent offers:
          </p>

          {/* Promotion Card Grid */}
          <div className="flexboxGrid">
            {promotions.map((promote, index) => (
              <PromotionCard
                key={promote.id}
                ref={(el) => (promotionCardRefs.current[index] = el)}
                image={promote.image}
                title={promote.title}
                description={promote.description}
                link={promote.link}
                buttonText={promote.buttonText}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            How to Claim Your Promotions
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            To make claims as a promotion in Bet88 is remarkably simple. Here’s
            how you can take advantage of our exciting offers:
          </p>

          <div className="compartmentStackedLayout mb30">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  1. Register an Account:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Create a Bet88 account if you want to know the details of the
                  promotion. Make sure that you are very keen when filling in
                  various details especially when registering for the various{" "}
                  <a
                    href="https://bet88-casino.vip/slots"
                    target="_blank"
                    className="fontWeightBold anchorLink">
                    online casinos
                  </a>{" "}
                  so that you do not have any troubles when claiming your
                  rewards.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={600}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  2. Verify Your Account:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  To finish up the verification, come through the email and the
                  phone number you used in the registration process. It makes
                  your account more secure and you are going to receive your
                  bonuses without any kind of delay.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={700}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  3. Make a Deposit:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Only a deposit-based promotion can make a deposit in one of
                  the secure payment methods provided. Always read the general
                  conditions and specific standing orders of each promotion
                  activity to know the guidelines.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={800}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  4. Claim Your Bonus:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  You should go to your account to the promotions tab to get the
                  bonus you are interested in. Some promotions are usually
                  accompanied by a promo code or a click-in before you can be
                  offered the promotion.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={900}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  5. Play and Win:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1">
                  Collect your bonus amount and free spins when you are having
                  fun with your selected games. Make the best out of the
                  promotional opportunities to enhance your perspective of
                  winning the big lot.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Payment Methods and Security
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            At Bet88, there are multiple safeguarded payment procedures being
            offered to make your transactions extremely seamless.
          </p>
          <div className="compartmentStackedLayout mb30">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Credit and Debit Cards:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  It is even easier and safer to use a credit or debit card as
                  it involves transferring money into and from this account. It
                  operates and is integrated with most of the leading card
                  institutions to guarantee a smooth payment mechanism.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  eWallets:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Select one from the commonly used eWallets to promote easy and
                  fast payments. Online wallets are also safer and simpler to
                  use in terms of finances.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Bank Transfers:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  In rather bigger deals, bank transfers act as a stable means
                  of depositing and withdrawing money among{" "}
                  <a
                    href="https://bet88-casino.vip/"
                    target="_blank"
                    className="fontWeightBold anchorLink">
                    betting sites
                  </a>
                  . Get safe and swift transfers in and out of your Bet88
                  account easily.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Prepaid Cards:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Prepaid cards that should be used for anonymous payments and
                  budgeting. Thus, prepaid cards would be very advisable for the
                  players, especially for those who would like to control the
                  amount they spend.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  GCash and PayPal:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1">
                  This makes payment through the GCash app and PayPal as smooth
                  and secure as possible. These are ideal in a mobile and online
                  card payment environment.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Security and Responsible Gaming
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            At Bet88, your security and well-being are our top priorities:
          </p>
          <div className="compartmentStackedLayout mb60">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Advanced Encryption:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Security is a priority for us, therefore, we apply the most
                  recent SSL encryption to secure your personal and financial
                  data. The information you share with us is secure and so are
                  your transactions and account numbers.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Responsible Gaming:
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  We assure our players of proper conduct in gambling to prevent
                  the activity from having negative impacts on the player and
                  society. They must set personal boundaries, set their alarm
                  clocks, and get proper counseling if necessary. Below are our
                  responsible gaming tools and resources that can assist you in
                  playing responsibly.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorPri pb30">
            Contact Us for Assistance
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Our customer support team is here to assist you with any questions
            or issues related to promotions or your account:
          </p>
          <div className="compartmentStackedLayout mb60">
            <div className="dualCompartment mb40">
              <SlideAnimation slideDuration={500}>
                <div className="dualCompartment2080NoWrap">
                  <div>
                    <picture class="imageIcon1">
                      <source
                        media="(min-width: 768px)"
                        srcset="/assets/affiliate1.png"
                      />
                      <img
                        src="/assets/affiliate1.png"
                        alt="Bet88"
                        title="Bet88"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Live Chat:
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Take advantage of the live chat and get assistance right
                      now. You can get help from our support team at any time of
                      the day and we will assist you.
                    </p>
                  </div>
                </div>
              </SlideAnimation>

              <SlideAnimation slideDuration={750}>
                <div className="dualCompartment2080NoWrap">
                  <div>
                    <picture class="imageIcon1">
                      <source
                        media="(min-width: 768px)"
                        srcset="/assets/affiliate2.png"
                      />
                      <img
                        src="/assets/affiliate2.png"
                        alt="Bet88"
                        title="Bet88"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Email Support:
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Use this email for matters that are more specific that
                      require detailed responses or any other complicated
                      questions. We endeavor to reply to emails within a day,
                      and in any case, within 24 hours.
                    </p>
                  </div>
                </div>
              </SlideAnimation>
            </div>

            <div className="dualCompartment">
              <SlideAnimation slideDuration={600}>
                <div className="dualCompartment2080NoWrap">
                  <div>
                    <picture class="imageIcon1">
                      <source
                        media="(min-width: 768px)"
                        srcset="/assets/affiliate1.png"
                      />
                      <img
                        src="/assets/affiliate1.png"
                        alt="Bet88"
                        title="Bet88"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Phone Support:
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      For direct help call us on the phone. Regarding any issues
                      you may have, our support representatives are always ready
                      to assist you.
                    </p>
                  </div>
                </div>
              </SlideAnimation>
            </div>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Join Bet88 Today!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Are you willing to grab our excellent and special offers and bonuses
            section? Join the exciting world of{" "}
            <a
              href="https://bet88-casino.vip/promotion"
              target="_blank"
              className="fontWeightBold anchorLink">
              Bet88 online gaming
            </a>{" "}
            by signing up with us today. Discover the game types, get your
            bonuses, and find out what fun and rewards are in store for you.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            Don’t miss out on the chance to maximize your play and boost your
            chances of winning. Sign up now and dive into a world of fantastic
            promotions at Bet88!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotion;
