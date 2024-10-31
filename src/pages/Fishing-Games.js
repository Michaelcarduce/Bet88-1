import React, { useRef, useEffect } from "react";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import bingo from "../miscellaneous/bingogames/bingoCarouselContents.js";
import TablesCard from "../miscellaneous/tablegames/tablesCard.js";
import promotions from "../miscellaneous/promotions/promotionCarouselContents.js";
import PromotionCard from "../miscellaneous/promotions/promotionCard.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import SlideAnimation from "../animations/SlideAnimation.js";
import PopInAnimation from "../animations/PopAnimation.js";
import FAQAnimation from "../animations/FAQAnimation.js";
import Footer from "../components/Footer.js";

const FishingGames = () => {
  const promotionCardRefs = usePopAnimation(); 
  const tablesCardRefs = usePopAnimation(); 

  return (
    <div>
      <Header />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden mt150spec">
        <div className="compartmentStackedLayout">
          <h1 className="heading1 colorPri pb30">
            Discover the Ultimate Fishing Game Adventure at Bet88!
          </h1>
          <div className="bgGlassMorphism p20 borderRadius1 mb60">
            <p className="descriptions textAlignmentLeft colorReg1">
              The world of online betting with the possibility of gambling and
              fishing games is waiting for you at the Bet88 platform. Bet88 is a
              new and entertaining market providing an approach to any{" "}
              <span className="fontWeightBold colorSec">
                online casino player
              </span>{" "}
              with our stunning fish shooting games that are vibrant and full of
              life. Depending on the kind of bass you are targeting or the kind
              of fun you are looking forward to, one is assured of lots of fun.
              Explore our fishing shooting games section and discover what has
              given other players all around the globe the boost they need.
            </p>
          </div>

          <div className="compartmentStackedLayout">
            <div className="compartmentStackedLayoutLeft">
              <h2 className="heading2 textAlignmentLeft colorSec pb30">
                Why Bet88 Stands Out in Fish Shooting Games
              </h2>
              <p className="descriptions textAlignmentLeft colorReg1 pb30">
                Fish shooting games are not only entertaining at Bet88 but also
                visually appealing due to how we have sourced the games to meet
                the clientèle. Our{" "}
                <span className="fontWeightBold colorSec">
                  live casino games
                </span>{" "}
                are developed by the best industry professionals, which means
                that we offer pleasing graphics and sounds, non-troublesome
                controls, and a number of features for different categories of
                users. For a beginner, this is an opportunity to practice,
                whereas for younger players it offers competitions that will
                lure them to Bet88. Our platform is home to:
              </p>
            </div>
            <div className="dualCompartment6040 mb60">
              <div className="compartmentStackedLayout">
                <SlideAnimation slideDuration={500}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      High-quality graphics as well as motion and interaction in
                      the underwater environment.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={600}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Lot of{" "}
                      <span className="fontWeightBold colorSec">
                        fish shooting games
                      </span>{" "}
                      for every
                      taste.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={700}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1 ">
                      Some facts about power-ups and bonuses for improving your
                      powers in the game.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={800}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      The multiplayer options for competing against friends and
                      other players in the world.
                    </p>
                  </div>
                </SlideAnimation>
              </div>
              <div className="compartmentStackedLayout">
                <PopInAnimation popDuration={1000}>
                  <picture class="imageBanner1">
                    <source
                      media="(min-width: 768px)"
                      srcset="/assets/slotImage1.png"
                    />
                    <img
                      src="/assets/slotImage1.png"
                      alt="Bet88"
                      title="Bet88"
                      class="img_fit"
                    />
                  </picture>
                </PopInAnimation>
              </div>
            </div>

            <div className="compartmentStackedLayoutLeft mb60">
              <h2 className="heading2 textAlignmentLeft colorSec pb30">
                Cutting-edge graphics and Immersive Gameplay
              </h2>
              <p className="descriptions textAlignmentLeft colorReg1 pb10">
                The{" "}
                <span className="fontWeightBold colorSec">
                  fish shooting games
                </span>{" "}
                available at Bet88 are some of the best ones because of the
                high-definition graphics. Both games take you to an energetic
                world below water with flashy fish and lovely other aqua beings.
                The backgrounds are dynamic, the fish are sharp and
                well-animated, and the animation is smooth and fantastic,
                definitely not something you would want to be bored with.
              </p>
              <p className="descriptions textAlignmentLeft colorReg1">
                Consequently, just like the tidy work of the artists the
                gameplay is also really profound. All the slots that can be
                played at Bet88 are entertaining and regardless of whether it is
                the main fishing action or one of the bonus games.
              </p>
            </div>

            <div className="compartmentStackedLayoutLeft">
              <h2 className="heading2 textAlignmentLeft colorSec pb30">
                A Wide Range of Games to Suit Every Player
              </h2>
              <p className="descriptions textAlignmentLeft colorReg1 pb30">
                At Bet88, we recognize that every player has unique preferences,
                so we offer a diverse selection of fish shooting games. Whether
                you prefer a classic fish-hunting experience or something more
                modern with power-ups and special bonuses, we’ve got you
                covered. Our extensive library of games includes:
              </p>
            </div>
            <div className="dualCompartment6040 mb60">
              <div className="compartmentStackedLayout">
                <SlideAnimation slideDuration={500}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      <span className="fontWeightBold colorSec">
                        Classic Fish Shooting:
                      </span>{" "}
                      Fast-paced games that require sharp shooting and quick
                      reflexes. These games are straightforward and packed with
                      action.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={600}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      <span className="fontWeightBold colorSec">
                        Bonus Games:
                      </span>{" "}
                      Spin your way to victory with extra chips, free plays, and
                      bonus rounds that give you the chance to win even more.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={700}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1">
                    <p className="descriptions textAlignmentLeft colorReg1 ">
                      <span className="fontWeightBold colorSec">
                        Multiplayer Modes:
                      </span>{" "}
                      Compete with other players in a real-time fishing
                      competition. See who can catch the most fish and come out
                      on top!
                    </p>
                  </div>
                </SlideAnimation>
              </div>
              <div className="compartmentStackedLayout">
                <PopInAnimation popDuration={1000}>
                  <picture class="imageBanner1">
                    <source
                      media="(min-width: 768px)"
                      srcset="/assets/slotImage1.png"
                    />
                    <img
                      src="/assets/slotImage1.png"
                      alt="Bet88"
                      title="Bet88"
                      class="img_fit"
                    />
                  </picture>
                </PopInAnimation>
              </div>
            </div>

            <div className="compartmentStackedLayoutLeft">
              <h2 className="heading2 textAlignmentLeft colorSec pb30">
                Innovative Game Providers
              </h2>
              <p className="descriptions textAlignmentLeft colorReg1 pb30">
                To ensure the highest quality gameplay, Bet88 partners with some
                of the most respected game developers in the{" "}
                <span className="fontWeightBold colorSec">
                  online casino industry
                </span>
                . These providers are known for their innovation, unique game
                mechanics, and cutting-edge designs, ensuring that Bet88 players
                always have fresh content to enjoy. Some of our esteemed
                partners include:
              </p>
            </div>
            <div className="dualCompartment6040">
              <div className="compartmentStackedLayout">
                <SlideAnimation slideDuration={500}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      <span className="fontWeightBold colorSec">PlayTech:</span>{" "}
                      Known for its vibrant graphics and engaging
                      gameplay.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={600}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      <span className="fontWeightBold colorSec">
                        MicroGaming:
                      </span>{" "}
                      A leading provider of high-tech, interactive fish shooting
                      games.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={700}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1 ">
                      <span className="fontWeightBold colorSec">CQ9:</span>{" "}
                      Offers creative and dynamic game interfaces with original
                      designs.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={700}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1">
                    <p className="descriptions textAlignmentLeft colorReg1 ">
                      <span className="fontWeightBold colorSec">
                        Pragmatic Play:
                      </span>{" "}
                      Delivers vibrant fish shooting games with unique features
                      and exciting bonuses.
                    </p>
                  </div>
                </SlideAnimation>
              </div>
              <div className="compartmentStackedLayout">
                <PopInAnimation popDuration={1000}>
                  <picture class="imageBanner1">
                    <source
                      media="(min-width: 768px)"
                      srcset="/assets/slotImage1.png"
                    />
                    <img
                      src="/assets/slotImage1.png"
                      alt="Bet88"
                      title="Bet88"
                      class="img_fit"
                    />
                  </picture>
                </PopInAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            How to Play Fish Shooting Games at Bet88
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Fish shooting games are easy to understand and are incredibly
            entertaining to all those who really love playing{" "}
            <span className="fontWeightBold colorSec">casino games online</span>
            . Follow these simple steps to get started:
          </p>
          <div className="compartmentStackedLayout mb60">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  1. Choose Your Game
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Bet88 offers a fish shooting games collection - Go through
                  this list and select your favorite fish shooting game. This
                  means that everyone should always have a go at every game
                  because there is always that one that they would like most.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={600}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  2. Understand the Basics
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  The{" "}
                  <span className="fontWeightBold colorSec">
                    fish shooting games
                  </span>{" "}
                  are specifically targeted to shooting fish whenever they are
                  in motion on the screen. The fish is point fish, where fishing
                  catches large fish to provide a certain amount of points, and
                  aims to catch as many fish as possible within the time limit.
                  Some fish even have special score bonuses that may add
                  something to your overall scores or special power-ups.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={700}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  3. Aim and Shoot
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  When a fish is swimming across the sea in front of you, get
                  ready to shoot by fixing your aim with your mouse or touchpad.
                  Timing and accuracy are key! Mainly aim for the fish with the
                  highest points and for extra points be on the lookout for the
                  bonus fish.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={800}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  4. Utilize Power-Ups
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Most fish shooting games have bonuses such as powerful shots
                  or increased firing rates. These bonuses are permission to be
                  used in different techniques to enhance the opportunity of
                  fishing more fish and in turn, gain higher scores.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={900}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  5. Enjoy Multiplayer Fun
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1">
                  To add a bit more fun, try the game in the multiplayer mode
                  and try to beat other players. Check out who catches the most
                  fish in real that will be able to win great prizes!
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Why Play Fish Shooting Games at Bet88?
          </h2>
          <div className="compartmentStackedLayout mb60">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  1. Variety and Choice
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  At the Bet88 platform, you can expect the readily available
                  wide range of fish shooting games to suit anyone’s preference.
                  It ranges from simple and traditional games to contemporary
                  and flashy games, whatever you are looking for you can find
                  it.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={600}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  2. Quality and Reliability
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Each of the fish shooting games is supplied by top software
                  companies with high-quality graphics and game flow and with
                  equal chances of winning. The games are also periodically
                  updated to add new features to the games.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={700}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  3. Engaging and Rewarding
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Not only that, our games come with prizes that can make you
                  richer in no time. Specific bonus features, power-ups, and
                  fish having higher coin value should be closely watched in
                  order to get an increased payout.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={800}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  4. Secure and Fair Play
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  We understand security as one of the most important aspects at
                  Bet88. All of the games are tested and approved for their
                  fairness, so each time you risk money, you can be sure you’ll
                  play fairly.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={900}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  5. Customer Support
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  In case you have any questions or face some problems, our kind
                  customer support service will assist you. You can call us on
                  the phone and get our immediate assistance or else, you can
                  write to us, we will email you back or you can chat with our
                  support team online.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorPri pb30">
            Tips for Maximizing Your Fish Shooting Experience
          </h2>
          <div className="compartmentStackedLayout">
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
                        alt="PANALOBET"
                        title="PANALOBET"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Start with Low Stakes
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      If you are new to shooting fish online games, it is
                      advisable to wager low amounts to familiarize yourself
                      with the games. It will also help you to play{" "}
                      <span className="fontWeightBold colorSec">
                        casino games
                      </span>{" "}
                      and master strategies without putting much of your money
                      at stake.
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
                        alt="PANALOBET"
                        title="PANALOBET"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Practice Regularly
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      The more you play the better you’ll get at it. Practicing
                      will help make your shots more accurate and also the time
                      you take to make the shot for fish shooting games.
                    </p>
                  </div>
                </div>
              </SlideAnimation>
            </div>

            <div className="dualCompartment mb40">
              <SlideAnimation slideDuration={500}>
                <div className="dualCompartment2080NoWrap">
                  <div>
                    <picture class="imageIcon1">
                      <source
                        media="(min-width: 768px)"
                        srcset="/assets/affiliate3.png"
                      />
                      <img
                        src="/assets/affiliate3.png"
                        alt="PANALOBET"
                        title="PANALOBET"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Use Bonuses Wisely
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Ensure you use appropriate bonuses and promotions when
                      betting at Bet88. They can offer you more hours of play,
                      increase your probability of emerging the winner, or even
                      improve your game in some way.
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
                        srcset="/assets/affiliate4.png"
                      />
                      <img
                        src="/assets/affiliate4.png"
                        alt="PANALOBET"
                        title="PANALOBET"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Stay Focused
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Fish shooting games are usually very worked up, so be
                      conscious of the fish flow and each fish’s points. Think
                      it out before shooting a goal in order to have the best
                      chance of scoring.
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
                        alt="PANALOBET"
                        title="PANALOBET"
                        class="img_fit"
                      />
                    </picture>
                  </div>
                  <div>
                    <h3 className="heading3 textAlignmentLeft colorPri pb10">
                      Set Limits
                    </h3>
                    <p className="descriptions textAlignmentLeft colorReg1">
                      However, do not spend much time and too much money on the
                      games. You need to set a budget that you should not cross
                      so as to avoid compromising your fun moments by going
                      broke out of gambling.
                    </p>
                  </div>
                </div>
              </SlideAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Join Bet88 Today for the Best Fish Shooting Games in the
            Philippines!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            <span className="fontWeightBold colorSec">
              Fish shooting game lovers
            </span>{" "}
            are in for a real treat because, at Bet88, we have the most vibrant
            and thrilling fish shooting games you can play online. Thanks to the
            great variety of games, bright images, and the dynamic character of
            the gameplay, we will provide only a pleasant and exciting time for
            every run-of-the-mill player and professional gamer. Whether the
            goal is to get a big prize or simply to have a good time fishing,
            Bet88 has everything needed for a great time.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            So why wait?{" "}
            <span className="fontWeightBold colorSec">Join Bet88</span> now to
            register and own a chance to engage yourself to play with our
            exciting high-risk fish shooting games. Exciting bonuses, excellent
            customer care, as well as several chances to strike it rich – your
            next shark is just behind the button!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FishingGames;
