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

const Affiliate = () => {
  const promotionCardRefs = usePopAnimation();
  const tablesCardRefs = usePopAnimation();
  const affiliateCardRefs = usePopAnimation();

  return (
    <div>
      <Header />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden mt150spec">
        <div className="compartmentStackedLayout">
          <h1 className="heading1 colorPri pb30">
            Earn Big with Panalobet Affiliate: Unlock Exclusive Profit-Sharing
          </h1>
          <div className="bgGlassMorphism p20 borderRadius1 mb60">
            <p className="descriptions textAlignmentLeft colorReg1 pb10">
              Do you love online gaming and would want to transform this passion
              into profit? Panalobet Affiliate is a perfect chance for you to
              earn money out of your passion for{" "}
              <span className="fontWeightBold colorSec">online casinos</span>.
              Is your company ready to rock affiliate marketing?
            </p>
            <p className="descriptions textAlignmentLeft colorReg1 pb10">
              This is your opportunity to immerse yourself in the wonderful and
              highly profitable sphere of casino entertainment as a reputable
              affiliate of Panalobet. If you have ever asked yourself how to
              pursue your passion while creating a profitable career for
              yourself then the{" "}
              <span className="fontWeightBold colorSec">
                Panalobet Affiliate Program
              </span>{" "}
              is your getaway. It goes beyond a business relationship—it’s the
              way to make money from your passion for social gaming.
            </p>
            <p className="descriptions textAlignmentLeft colorReg1 pb10">
              Being an affiliate, you will be partnering with one of the oldest
              brands that are in the business of{" "}
              <span className="fontWeightBold colorSec">online casinos</span>.
              It is going to be your task if you are our Panalobet affiliate to
              bring out the best in gaming entertainment to those enthusiasts in
              this world. Affiliate programs at your service will help your
              passion for{" "}
              <span className="fontWeightBold colorSec">casino games</span>
              become your profitable business.
            </p>
            <p className="descriptions textAlignmentLeft colorReg1">
              Therefore, if you wish to make money from your love of gaming or
              are an affiliate marketer seeking additional profit centers, the
              Panalobet Affiliate Program is your chance. Start today and open
              yourself to a great financial opportunity!
            </p>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Steps to Join Panalobet Casino Affiliate Program:
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Here are the detailed steps for joining Panalobet Casino's affiliate
            program:
          </p>
          <div className="compartmentStackedLayout mb30">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorSec pb10">
                  Step 1: Sign Up for an Affiliate Account
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1">
                  First, you need to go to the Panalobet Casino official website
                  and explore the affiliates’ program page. In the registration
                  form, enter your first name as well as your last name, email,
                  and other necessary details. After submitting the form, you
                  will receive an activation email with all necessary
                  instructions on further account usage. When your account is
                  activated, you will be redirected to the affiliate area to
                  perform any affiliate activity.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={600}>
              <div className="bgGlassMorphism p20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorSec pb10">
                  Step 2: Introduce New Players
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1">
                  The first responsibility of an affiliate partner is to
                  popularize Panalobet Casino and entice users to play. Tell
                  people that you want them to play games on the platform using
                  your network and social media as well as other marketing
                  approaches. Post your custom affiliate links that help track
                  the referrals and make your audience register and participate
                  in the casino. The more players that you recruit, the more
                  money you stand to make, although in general.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={700}>
              <div className="bgGlassMorphism p20 borderRadius1">
                <h3 className="heading3 textAlignmentLeft colorSec pb10">
                  Step 3: Earn Unlimited Commission
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1">
                  As soon as the players you referred start playing{" "}
                  <span className="fontWeightBold colorSec">
                    Panalobet Casino
                  </span>
                  , then you shall be with instant commissions depending on the
                  flow of the players. The commissions provided at Panalobet
                  casino are relatively small and you can make as much money as
                  you want. Your commissions will therefore depend on the number
                  of players that you refer to the site and the efforts they put
                  into gambling. Check your commission levels via the affiliate
                  control panel which displays player registrations and
                  commission amounts.
                </p>
              </div>
            </SlideAnimation>
          </div>
          <p className="descriptions textAlignmentLeft colorReg1 mb80">
            You should now be able to join the affiliate program for Panalobet
            Casino and act as an affiliate to earn your commissions.
          </p>

          {/* Blog Card Grid */}
          <div className="flexboxGrid">
            {affiliates.map((affiliates, index) => (
              <AffiliateCard
                key={affiliates.id}
                ref={(el) => (affiliateCardRefs.current[index] = el)}
                image={affiliates.image}
                title={affiliates.title}
                link={affiliates.link}
                buttonText={affiliates.buttonText}
              />
            ))}
          </div>

          <h3 className="specialHeading uppercaseText colorPriDarkShadow pb30 plr60">
            Get Paid Weekly with Panalobet Affiliate – Up to{" "}
            <span className="percent">42%</span> Commission!
          </h3>
          <p className="descriptions colorReg1">
            Sign up for the Panalobet Affiliate Program now and receive huge
            revenue sharing just ensuring your players are active. Don’t miss
            the chance – To learn more and sign up to benefit from this
            immediately, click here.
          </p>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Exclusive Perks of Joining the Panalobet Affiliate Program
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Becoming Panalobet’s partner provides opportunities that are very
            inspiring and beneficial to grasp. Being an affiliate of Panalobet,
            you shall enjoy working with a top-notch online casino with huge
            traffic in the gaming industry. Advertise a reputable and popular
            website in the sphere of online gambling and use the traffic coming
            from there for your website. Affordable commissions are enabled for
            your endeavors to be lucrative with promising fortunes. Come and
            partner with Panalobet and be part of the fun as you also share in
            the financial gains of the new partnership!
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Why Panalobet Has the Best Affiliate Program in the Philippines
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet affiliate program establishes itself as the number one
            affiliate program in the Philippines with many more benefits. Being
            oriented on both the players and the affiliates’ fairness and
            security, Panalobet sets its affiliates free by providing all the
            necessary conditions for safe and effective cooperation in the name
            of everyone’s satisfaction.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            It will be remembered that our program has one of the largest
            commissions where many noble affiliates can earn decent amounts.
            Also very important is the speed of the payout which means you get
            paid your deserved brokerage fees without delay.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Ensconced in Curacao gaming code, Panalobet is as legit as all the
            players in the market and confirms their best practices. This
            licensing is evidence of our faithful implementation of high
            standards and fair practices in the gaming industry.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            That is why the{" "}
            <span className="fontWeightBold colorSec">
              Panalobet Affiliate Program
            </span>{" "}
            is the best choice for secure and lucrative cooperation with
            affiliate programs for because of the perfect choice of commission,
            fast transactions, and security. Become a part of our team, and
            taste the best in affiliate marketing!
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Panalobet Casino Products: Slots, Table Games & More!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Discover what{" "}
            <span className="fontWeightBold colorSec">Panalobet Casino</span>{" "}
            has to offer, a world of gaming and fun for everyone online. Be it
            gaming or an affiliate with a desire to look for more opportunities,
            then our platform is ideal for you. Get the best slots, card, and
            table games, read about the current trends in the industry or simply
            find out all about Panalobet.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            For those people who are willing to get more involved, Panalobet has
            further opened a perfect chance via the{" "}
            <span className="fontWeightBold colorSec">
              Panalobet Affiliate Program
            </span>
            . With the click of a button, just like signing into an online
            account, Affiliates can actually open up this full wealth. To learn
            more about participating in the program, read our article on how to
            turn your love for games into big wins. It’s time to get in on the
            action – join the Panalobet affiliate program now and discover where
            fun and profit come together.
          </p>
          <h4 className="heading4 textAlignmentLeft colorTer pb30">
            Join the Panalobet Affiliate Program Today!
          </h4>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Earn Big Every Week: Panalobet's Commission Structure Explained
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Look for the best outcome and become our member through the
            Panalobet Affiliate Program and grab the Weekly Commission
            Structure. Affiliates are rewarded up to 42% of their weekly
            commissions and it takes your relationship with Panalobet to the
            next level. This unique program is to match your efforts with your
            earnings as Panalobet Casino becomes more popular through our app.
            As an affiliate on the Panalobet platform not only helps the
            platform grow but also opens the possibility of generating very high
            weekly revenues in line with the activity of the players that you
            attract.
          </p>
          <h3 className="heading3 textAlignmentLeft colorPri pb30">
            Weekly Commission Breakdown:
          </h3>

          <table class="custom-table mb60">
            <thead className="descriptions colorReg2">
              <tr>
                <th>WEEKLY NET LOSS</th>
                <th>WEEKLY ACTIVE PLAYERS</th>
                <th>WEEKLY COMMISSION %</th>
              </tr>
            </thead>
            <tbody className="descriptions colorReg1">
              <tr>
                <td>&gt; 0</td>
                <td>2 to 4</td>
                <td>Earn 15%</td>
              </tr>
              <tr>
                <td>&gt; 0</td>
                <td>5+</td>
                <td>Earn 42%</td>
              </tr>
            </tbody>
          </table>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            How to Start as a Panalobet Affiliate Partner
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Affiliating with Panalobet, as an affiliate partner is one of the
            best ways to increase your earnings while sharing the experience
            with others. In the process, it is quite simple, and the feedback I
            receive is quite delightful. All you need is to sign up with an
            affiliate account and proceed with our Panalobet Affiliate Program
            now!
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            The responsibility of any affiliate is to attract new users to
            download the Panalobet Casino App and explore the world of{" "}
            <span className="fontWeightBold colorSec">online casinos</span>.
            Therefore, the more players you attract and maintain, the higher
            your chance of earning huge money. Your rewards will increase as you
            retain more players and for a week-to-week commission of up to 42%
            of the gross net profit.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Perhaps the strongest suit of the Panalobet Affiliate Program is the
            great earnings it offers its members. An added advantage is that it
            offers you various earning chances that are directly proportional to
            the effort invested. Subtracting bonuses from the net profit will
            give you the commission percentage to your final earnings.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb130">
            By promoting Panalobet, you can become an Affiliate and have a good
            and financially remunerative time with full satisfying
            entertainment. Sign up as an affiliate today and earn massive
            profits as you make players know the fantastic Panalobet Casino
            platform!
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Panalobet Casino: Cutting-Edge Features for the Ultimate Gaming
            Experience
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            At Panalobet Casino, each gamer is guaranteed an excellent
            experience during the game. Check a wide choice of online slots
            created by the most successful developers in the industry, such as
            Jili, Red Tiger, as well as Fa Chai. Sit at the highest level of
            table games and have extra moments of experience from the most
            popular and famous providers, including JDB and KingMaker.
            Especially for the fans of sports, Sportsbook by Ezugi is a more
            complex betting line of various events.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            The offers provided by the Panalobet Casino include first deposit
            bonuses, reload bonuses available for players, rebates, and a lot of
            cashback promotions. This makes a platform have the highest RTP
            (Return to Player) levels which helps players to increase chances of
            winning big.
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Sign Up with the Affiliate Program Now!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Earn more by becoming an affiliate of the Panalobet Affiliate
            Program of our gambling site. You will be able to reap huge benefits
            by being part of its affiliate program due to the steady growth of
            the Panalobet Casino’s worldwide products and services. It offers
            fun games, and unmatched bonuses and is reputed to be trustworthy;
            the ideal partner for Affiliates.
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Panalobet Casino Customer Support
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            <span className="fontWeightBold colorSec">Panalobet Casino</span>{" "}
            respects and values our customers as they are our main focus.
            Customer Support A Customer Support department is always on standby,
            round the clock to help both players and hybrids. One of the
            greatest aspects of the affiliate program is that an affiliate has
            to log in to the affiliate account where he can monitor his account
            status. As a player or partner, Panalobet understands the importance
            of top-notch service and customer care.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Even if you are an affiliate, you have a good opportunity to earn
            potential with Panalobet{" "}
            <span className="fontWeightBold colorSec">live Casino</span> because
            we have potential shared profit we can make together. Being a
            company that addresses issues of innovation, customers, and
            affiliation, Panalobet Casino establishes itself as a company to
            compete within the online gaming business. Sign up now and let us
            succeed side by side!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Affiliate;
