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

const Bingo = () => {
  const promotionCardRefs = usePopAnimation();
  const tablesCardRefs = usePopAnimation();

  useEffect(() => {
    document.title = "Play Online Bingo at Bet88 | Exciting Games & Big Wins!";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join Bet88 now, play Bet88 online bingo which offers you the best bingo gaming experience in the Philippines. Play exciting bingo games, win big prizes."
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden mt150spec">
        <div className="compartmentStackedLayout">
          <h1 className="heading1 colorPri pb30">
            Discover the Ultimate Bingo Adventure at Bet88!
          </h1>
          <div className="bgGlassMorphism p20 borderRadius1 mb60">
            <p className="descriptions textAlignmentLeft mb10 colorReg1">
              Welcome to the world’s premier{" "}
              <span className="fontWeightBold colorSec">online bingo site</span>{" "}
              – Bet88 online bingo which offers you the best bingo gaming
              experience in the Philippines. Whether you are a professional
              player or a beginner, Bet88 has numerous bingo games that are full
              of interesting features, perks, and bonuses and with a practical
              interface that guarantees fun for hours.
            </p>
            <p className="descriptions textAlignmentLeft colorReg1">
              Bingo does not necessarily entail someone winning a game, it is
              also a social activity where one can make new friends, risks, and
              even earn huge profits. Bet88 has upped the stakes when it comes
              to bingo by introducing varied bingo rooms, dynamic bingo play
              opportunities, and enormous bingo bonuses.
            </p>
          </div>

          <div className="compartmentStackedLayout">
            <div className="compartmentStackedLayoutLeft">
              <h2 className="heading2 textAlignmentLeft colorSec pb30">
                Why Bet88 Stands Out for Online Bingo
              </h2>
              <p className="descriptions textAlignmentLeft colorReg1 pb20">
                Bet88 has one of the best bingo platforms online because we have
                taken our time to offer multiple bingo games, different bingo
                themes, and bingo bonuses perfect for different bingo
                enthusiasts. Whether the player enjoys only the basic bingo
                games or would like more enhanced games with extra benefits, our
                site offers a line of games that will meet the player’s
                expectations.
              </p>
              <h3 className="heading3 textAlignmentLeft colorTer pb20 ml100">
                What sets Bet88 apart:
              </h3>
            </div>
            <div className="dualCompartment6040">
              <div className="compartmentStackedLayout mb20">
                <SlideAnimation slideDuration={500}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Several bingo rooms are available with varying the mood
                      and the types of games presented.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={600}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Bonus offers that welcome new players in addition to
                      occasional special offers.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={700}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1 ">
                      Interactive chat options to engage with other
                      players.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={800}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Faster transactions accompanied by safe payment methods,
                      including, amongst others, GCash.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={900}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Bingo games with different levels of investments ranging
                      from small to large stakes one can afford.
                    </p>
                  </div>
                </SlideAnimation>

                <SlideAnimation slideDuration={1000}>
                  <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb30">
                    <p className="descriptions textAlignmentLeft colorReg1">
                      Daily, weekly, and monthly rewards and prizes can help you
                      win massive amounts of money.
                    </p>
                  </div>
                </SlideAnimation>
              </div>
              <div className="compartmentStackedLayout mb20">
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
              <p className="descriptions textAlignmentLeft colorReg1">
                Now that we’ve discussed what bingo is, let’s take a closer look
                at bingo at Bet88 and why you should come to play with
                us!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayout">
          <h2 className="heading2 colorSec pb30">
            A Wide Range of Bingo Games to Suit Every Player
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            At Bet88, we know that bingo games can be quite diverse in terms of
            the preferences and tastes of every player. That is why you will
            find that we have a good lineup of bingo games with varieties that
            suit everyone’s desires and abilities. They offer classic 75-ball
            bingo along with the more quickly moving 90-ball bingo type that is
            popular in many modern gaming sites. Here’s a look at some of the
            popular bingo games you can enjoy on our platform:
          </p>
          {/* Table Games Card Grid */}
          <div className="flexboxGrid">
            {bingo.map((bingo, index) => (
              <TablesCard
                minHeight="700px"
                key={bingo.id}
                ref={(el) => (tablesCardRefs.current[index] = el)}
                image={bingo.image}
                title={bingo.title}
                description={bingo.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Interactive Bingo Rooms with Live Chat
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            At Bet88, we know that bingo should not be a lonely game nor should
            it be a silent one. That is why we provide bingo rooms where you can
            interact with other players as you play the bingo games. Get to
            learn people, make friends, and feel the joy of each victory you
            make. Our chat moderators act as the hosts and enforce friendly
            images and tone, which make those who visit our site to play bingo
            feel like they are part of a big family.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            The live chat option is fun and entertaining whether you are
            rejoicing at a victory or just having a good time with other gamers.
            And who knows? You can even learn some tricks on bingo from those
            who have been playing it for quite some time!
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Exciting Promotions and Bonuses for Bingo Players
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Bet88 has a generous bonus and promotions it offers to its players
            to enhance your bingo experience. We have many options on how to
            increase your chances of winning including gifts for first-time
            players, and bingo promotions. Here are some of the top promotions
            available to bingo players at Bet88:
          </p>

          <div className="compartmentStackedLayout mb30">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Exciting Promotions and Bonuses for Bingo Players
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Furthermore, there is entertainment mixed with the possibility
                  of earning big money with Bet88. In as much as luck governs
                  your earnings, mathematics works hand in hand to determine the
                  winnings’ probabilities.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={600}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Welcome Bonus for New Players
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  New customers at Bet88 can claim a 100%{" "}
                  <span className="fontWeightBold colorSec">Welcome Bonus</span>{" "}
                  on their first deposit that will allow them to play bingo and
                  other games at the site. This way, you will have some cash to
                  wager in our bingo rooms and can hopefully discover new games
                  with no significant loss of your own dollars.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={700}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Daily and Weekly Bingo Promotions
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  We also have bonuses listed at the top of our page with our
                  daily and weekly specials which provide you with more chances
                  to claim. Such can be bingo tickets free, reload bonuses, and
                  cashback among others. Our Promotions Page has more
                  information about ongoing promotions and other special offers.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={800}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Loyalty Rewards and VIP Program
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Players at Bet88 are more special to us, and that is why we
                  have given our players an opportunity to accumulate points
                  from every game they play. Earn points to be redeemed for
                  special bonuses, special VIP privileges, and even free spins
                  at our band slot machines.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={900}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Progressive Jackpots
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  If you are in the lookout for an opportunity to win big, then
                  our progressive jackpot bingo games are the best. These games
                  have progressives that increase each time the moving tickets
                  are being bought, with a chance of winning massive jackpots at
                  your fingertips. The Jackpot increases with every game and
                  rises and rises, hence making every single game much more
                  attractive.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Safe and Secure Transactions with GCash
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Establishing the company's focus on efficiency, Bet88 aims to
            deliver a safe gambling environment. That is why we provide reliable
            payment methods like GCash which enable participants in the
            Philippines to make payments swiftly and securely. For banking with
            Bet88 to deposit funds for bingo games or to cash out your winnings,
            Bet88 offers swift, secure and clear transactions.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            We also provide other easy payment methods such as bank transfer
            methods, e-wallets, and many more to make sure that our players do
            not experience any hassle in playing.
          </p>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            How to Play Online Bingo at Bet88: A Step-by-Step Guide
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Playing bingo at Bet88 comes with easy steps and it’s still
            enjoyable if it is the first time to play bingo. Follow these simple
            steps to get started:
          </p>

          <div className="compartmentStackedLayout mb30">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Step 1: Sign Up for an Account
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  If you want to play bingo at Bet88 you must first register an
                  account at the casino and this can be done easily. No, it’s
                  simple – our registration page lets you enter your personal
                  and business information and start enjoying our services right
                  away. Do not forget to take your welcome bonus to get some
                  more cash extra to start with.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={600}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Step 2: Choose a Bingo Room
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  After you log in to the site, use the chance to take our range
                  bingo rooms. The rooms vary in game types, ticket prices, and
                  prizes offered so you should select a room that you want to
                  join. You can also search by jackpot amount, game sort or
                  buy-in fee to ensure you choose the best room.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={700}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Step 3: Buy Your Bingo Tickets
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Before you select the room you join, buy your bingo tickets.
                  The number of tickets you can purchase is unlimited based on
                  the game plan that is set. Just like my title says: buy more
                  tickets, your odds of winning are even better!
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={800}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Step 4: Play the Game
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  After the game begins, numbers will be called, and your cards
                  will also change as you dab off the called numbers at Bingo
                  For You. Watch your cards and wait for yourself to shout bingo
                  once you complete a particular pattern.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={900}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Step 5: Collect Your Winnings
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  If you win, your prize will be automatically credited to your
                  account. You can continue playing or withdraw your winnings
                  through your preferred payment method.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Tips for Maximizing Your Bingo Experience
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb30">
            Here are some helpful tips to make the most of your time playing
            bingo at Bet88:
          </p>
          <div className="compartmentStackedLayout mb30">
            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Start with Smaller Games
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Once you get interested into playing bingo online, you try the
                  rooms with less number of players to go first. This raises
                  your odds of a win although you are still mastering the game.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Manage Your Budget
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  The bingo games should also be provided with a financial limit
                  when it comes to funding the bingo games. Do not try to make
                  up for losses; the same applies to gambling and gaming
                  responsibly.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Take Advantage of Bonuses
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Ensure that you engage in use of all the promotion offers so
                  that this can enhance your chances of winning. Cash back bingo
                  and free bingo vouchers are great ways to expand your bingo
                  funding capacity and increase your winnings.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Play Multiple Cards
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  It is more likely that you get to mark off several numbers and
                  therefore you can play many bingo cards. But heed it in mind
                  that one needs to be able to have access to all these cards so
                  you cannot afford to lose any card that may be necessary for
                  the formation of a feasible combination.
                </p>
              </div>
            </SlideAnimation>

            <SlideAnimation slideDuration={500}>
              <div className="bgGlassMorphism p20 ml100 mr20 borderRadius1 mb20">
                <h3 className="heading3 textAlignmentLeft colorReg1 pb10">
                  Join the Community
                </h3>
                <p className="descriptions textAlignmentLeft colorReg1 pb10">
                  Communicate with other players in the live chat to get some
                  tips, share stories and victories. Well bingo is a social game
                  so expect the more you engage the more you are going to have
                  fun.
                </p>
              </div>
            </SlideAnimation>
          </div>

          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Why Play Bingo at Bet88?
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Bet88 delivers a package bingo solution that is unbeatable in the
            Philippines market. Offering a vast choice of{" "}
            <span className="fontWeightBold colorSec">casino games</span>,
            fantastic bonuses, and prompt responses to every player’s question,
            our website guarantees you’ll have a good time. In addition, giving
            secure transactions and fast payout through GCash, the main goal is
            to have fun and make more money.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            So why wait? Currently you can sign up at Bet88 and join the
            greatest number of enthusiasts in playing online bingo. So
            regardless of whether you are playing for that extra fun with your
            friends or going straight for the big jackpot, Bet88 has what you
            need for some incredible and exciting{" "}
            <span className="fontWeightBold colorSec">
              casino gaming experience
            </span>
            !
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bingo;
