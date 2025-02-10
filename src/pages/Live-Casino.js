import React, { useRef, useEffect } from "react";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import tables from "../miscellaneous/tablegames/tablesCarouselContents.js";
import TablesCard from "../miscellaneous/tablegames/tablesCard.js";
import promotions from "../miscellaneous/promotions/promotionCarouselContents.js";
import PromotionCard from "../miscellaneous/promotions/promotionCard.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import Footer from "../components/Footer.js";

const LiveCasino = () => {
  const promotionCardRefs = usePopAnimation();
  const tablesCardRefs = usePopAnimation();

  useEffect(() => {
    document.title = "Bet88 | Online Live Casinos in the Philippines 2025";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Enjoy the live casino games Online in Philippines with Bet88. Sign Up now and enjoy real-time gaming with professional dealers, exciting games like Baccarat, Blackjack, and Roulette."
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden mt150spec">
        {/* Promotion Card Grid */}
        <div className="compartmentStackedLayout mb60">
          <div className="flexboxGrid mb40">
            {promotions
              .slice(-2) // Select only the last two promotions
              .map((promote, index) => (
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
          <div class="promotionButton">
            <a href="#" target="_blank" class="heading4 colorQuat noWrap">
              See All Promotions
            </a>
          </div>
        </div>

        <div className="compartmentStackedLayout">
          <h1 className="heading1 colorPri pb30">
            Explore the Top-Rated Online Live Casinos in the Philippines 2025
          </h1>
          <div className="bgGlassMorphism p20 borderRadius1">
            <p className="descriptions textAlignmentLeft mb10 colorReg1">
              Greetings and welcome to the thrilling realm of{" "}
              <span className="fontWeightBold colorSec">
                Philippine Live casinos
              </span>
              ! Virtual gaming and betting to get a higher level of thrill and
              easy to access in the year 2025. Among all online Gaming platforms
              available, Bet88 is without a doubt ranked in the league of
              extraordinary platforms that would provide{" "}
              <span className="fontWeightBold colorSec">Filipino gamers</span>{" "}
              with the ultimate gaming experience.
            </p>
            <p className="descriptions textAlignmentLeft mb10 colorReg1">
              Depending on one’s experience in using{" "}
              <span className="fontWeightBold colorSec">live casino sites</span>
              , Bet88 has a lively and colorful user interface that both
              existing and future users will love to use. The software Bet88
              covers a wide range of offered games and includes such as virtual
              table games, slot games, and more, which provide a breath-taking
              and captivating base of the real casino.
            </p>
            <p className="descriptions textAlignmentLeft mb10 colorReg1">
              Bet88 continues on its run as one of the key players in the online
              gaming genre as it gives players the chance to safely play their
              favorite casino games. For anyone wanting the glamor of casino
              entertainment from the comfort of their own home then Bet88 is the
              go-to platform for the easiest of accesses and the ethos of
              protecting against problem gambling.
            </p>
            <p className="descriptions textAlignmentLeft colorReg1">
              Here, we’ll present the most significant{" "}
              <span className="fontWeightBold colorSec">
                Philippine online casino
              </span>{" "}
              websites for 2025 based on various factors that influence players’
              satisfaction. In this regard, we give you detailed information on
              where to play so that every gamer in the Philippines can have a
              great time gaming. This includes the following stunning products
              provided by Bet88 together with other great platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayout">
          <h2 className="heading2 colorSec pb30">
            Bet88- Best Online Live Casino in Philippines
          </h2>
          {/* Table Games Card Grid */}
          <div className="flexboxGrid">
            {tables.map((tables, index) => (
              <TablesCard
                // style={{ minHeight: "700px" }}
                minHeight="700px"
                key={tables.id}
                ref={(el) => (tablesCardRefs.current[index] = el)}
                image={tables.image}
                title={tables.title}
                description={tables.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            The Early Beginnings of Casinos in the Philippines: A Historical
            Journey
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            One of the most dynamic fields in the Philippines is the
            entertainment industry which has experienced a shift with the advent
            of online casinos in the early half of the 2000s period. The first
            legal casinos appeared in 2009, while the government saw legit
            online casinos as valuable opportunities for the expansion of
            tourism and more revenues. However, those establishments underwent
            numerous challenges such as; changes in laws and alteration of
            customers’ attitudes.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Thus, creating new forms of gaming possibilities, the fresh pělace
            in the rich humanity context, there appeared the{" "}
            <span className="fontWeightBold colorSec">Bet88 Casino</span>.
            Punters in the Philippines can now access an almost exhaustive list
            of games and betting solutions through this innovative solution.
            Thus, making the currently available best online casino game
            experience through devices much easier, more comfortable, and more
            convenient, is made possible by Bet88.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            This transition from traditional brick-and-mortar casinos to the
            dynamic world of{" "}
            <span className="fontWeightBold colorSec">
              Philippine online casinos
            </span>
            , exemplified by Bet88, showcases the industry's continuous
            evolution and adaptability.
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            The Mobile Casino Boom in the Philippines: Play Anytime, Anywhere
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Mobile casinos have since become the focus of today's gaming
            industry in the Philippines and have the potential to redefine the
            industry. With the availability of smartphones and a high internet
            connection, it has become possible to download and have a perfect
            casino application on mobile devices. Bet88 Casino has fully
            supported this trend by providing various gambling games that entail
            real money to the players thereby making sure that all the players
            have everything that they need in the casino games.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            <span className="fontWeightBold colorSec">Online casinos</span> on
            mobile devices have opened the door to ease and a cozy experience
            that has benefited the lovers of online casino slots and tables.
            Mobile gaming in real money casinos has been made more enjoyable
            through advanced technology, as well as well-designed interfaces
            within brands such as Bet88. It establishes a great shift towards
            the future development of the casino industry, continues its
            evolution, and moves toward a digital class of entertainment where
            players do not have to worry about online casino free bonuses or
            online casino free sign-up bonuses.
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Online Casino Games in the Philippines: Legal Insights and
            Regulations
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            The legal status of{" "}
            <span className="fontWeightBold colorSec">
              live casino gambling in the Philippines
            </span>{" "}
            has gradually opened, and people can play offshore casino games more
            often. Some alternatives to a full range of legal and diverse
            entertainment for enthusiasts are still available, such as Bet88
            Casino, which emerges as a way for fans to face the restricted local
            laws. Offshore casinos offer participants a long list of activities,
            including slots, tables, and other gambling types meeting the rules
            of international law.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Of course, one of the greatest benefits of operating offshore
            platforms is that they do not violate any international gaming laws
            that are designed to protect all game enthusiasts. Having adopted
            this structure, the Bet88 Casino ensures that the players can
            effectively engage themselves in a wide range of{" "}
            <span className="fontWeightBold colorSec">online casino games</span>{" "}
            that comply with the legal aspect of the country’s laws. As it will
            be seen from the analysis of the player choice and legality
            concerning the Casino industry of the Philippines, it is a
            continuously changing journey.
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Philippines’ Best Online Casinos Compared: Features, Bonuses & More!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            In this case, only a detailed selection of the best platforms in the
            global context of online casinos in the Philippines has been
            considered. This list is specifically compiled to help any Filipino
            gambler explore the safest and more rewarding betting options
            possible. It consists of top Internet gambling sites and covers such
            aspects as games, security and usability of the sites.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            Looking into this well-phrased choice, players will be safe in the
            knowledge that they get connected only to the top and most
            trustworthy{" "}
            <span className="fontWeightBold colorSec">
              legit online casinos
            </span>
            . From online casino games real money, to online casino free
            bonuses, and online casino free sign-up bonuses, the guide
            guarantees safe and enjoyable betting for all the players in the
            Philippines.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiveCasino;
