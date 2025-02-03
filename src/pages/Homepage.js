import React, { useRef, useEffect } from "react";
import "../styles/global.css";
import "../styles/static.css";
import Header from "../components/Header.js";
import ImageCarousel from "../miscellaneous/ImageCarousel.js";
import blogs from "../miscellaneous/blogs/blogsCarouselContents.js";
import BlogCard from "../miscellaneous/blogs/blogCard.js";
import games from "../miscellaneous/games/gamesCarouselContents.js";
import GamesCard from "../miscellaneous/games/gamesCard.js";
import promotions from "../miscellaneous/promotions/promotionCarouselContents.js";
import PromotionCard from "../miscellaneous/promotions/promotionCard.js";
import usePopAnimation from "../hooks/usePopAnimation.js";
import SlideAnimation from "../animations/SlideAnimation.js";
import FAQAnimation from "../animations/FAQAnimation.js";
import Footer from "../components/Footer.js";

const Homepage = () => {
  const blogCardRefs = usePopAnimation();
  const promotionCardRefs = usePopAnimation();
  const gamesCardRefs = usePopAnimation();

  useEffect(() => {
    document.title =
      "Panalobet | Trusted Online Casino and Sports Betting in Philippines - PAGCOR Licensed";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Panalobet Casino is not just a casino but a place where players get a real-time, safe, and easy experience to play games in particular from the Philippines. Join now and get attractive welcome bonus!"
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <ImageCarousel />
      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayout mb60">
          <h1 className="heading1 colorPri pb30">
            Panalobet - Trusted Online Casino and Sports Betting in Asia- PAGCOR
            Licensed
          </h1>

          <div className="bgGlassMorphism p20 borderRadius1">
            <p className="descriptions textAlignmentLeft mb10 colorReg1">
              Nowadays, almost all things are on the internet and so too is
              mobile gaming.{" "}
              <span className="fontWeightBold colorSec">Casino games</span> have
              recently skyrocketed in popularity in the Philippines since they
              offer users an easy and direct approach to playing casino games
              through their smartphones and other gadgets. Panalobet is the
              pioneer of this revolution, ensuring that playing on the Internet
              is perfectly fun for gamers.
            </p>
            <p className="descriptions textAlignmentLeft colorReg1">
              At Panalobet, players are in a position to enjoy multiple
              multiplication kinds of online casino games such as slot games,
              and live dealer games, amongst others. There are no downloads of
              heavy software and the real-time mobile website and the dedicated
              app provide the exhilarating and thrilling casino in your hands.
              Regardless of the location you might be – at home, work, or during
              traveling, Panalobet will offer you the finest online casino
              experience.
            </p>
          </div>
        </div>

        {/* Games Card Grid */}
        <div className="flexboxGrid">
          {games.map((games, index) => (
            <GamesCard
              key={games.id}
              ref={(el) => (gamesCardRefs.current[index] = el)}
              image={games.image}
              title={games.title}
              description={games.description}
            />
          ))}
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 textAlignmentLeft colorSec pb30">
            Panalobet: The Top Choice for Filipino Players – Here’s Why!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet stands out as the
            <span className="fontWeightBold colorSec">
              {" "}
              best online casino
            </span>{" "}
            for Philippines players bringing together a virtual platform that
            captures both pleasure and accuracy. Panalobet however is not only
            well recognized for the vast games offered in the online casino, but
            more significantly for the determined effort to provide the
            Philippines players a personalized all round gaming experience.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet doesn’t just give you that gaming experience on your
            device, but also makes you feel like you are in a live dealer casino
            where you are dealt with by professional dealers for{" "}
            <span className="fontWeightBold colorSec">slot games</span>,
            baccarat, and even jackpot casino games. Panalobet provides a
            seamless betting journey with an easy-to-navigate interface and
            sleek graphics; you can always receive the best of live dealer
            games, online slots, and baccarat without a hitch.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Apart from entertainment in various games, Panalobet creates a
            channel of professionalism in games as the consumers come together
            with the common goal of betting. The platform upholds responsibility
            in gaming and upholding fairness and this lays down a very ethical
            tone for any player to play in the platform. It also provides the
            Panalobet
            <span className="fontWeightBold colorSec">
              {" "}
              free sign-up bonuses{" "}
            </span>
            and No deposit bonuses so that making the spinning journey always
            too rewarding from every big to the first spin.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            Panalobet is not only entertainment, it is a membership in a group
            of people with similar interests of enjoying the Philippine culture
            of betting on games. Panalobet provides one of the best online
            gaming experiences through Multiplayer facilities providing a wide
            range of
            <span className="fontWeightBold colorSec"> live casino games </span>
            , and other opportunities & challenges with strategic progression.
          </p>
        </div>

        {/* Promotion Card Grid */}
        <div className="compartmentStackedLayout">
          <p className="heading4 mb20 colorTer">
            Come and play at Panalobet now and be on the way to greatness as you
            go in for the greatest online casinos thrilling games.
          </p>
          <div className="flexboxGrid mb40">
            {promotions.slice(-4).map((promote, index) => (
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
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 colorSec pb30">
            Panalobet: Your Trusted Online Casino with Robust Security and
            Licensing
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            When dealing with money, security protocols should be strong to
            avoid loss of money, or extra and unnecessary effort prompting the
            users to seek other platforms. As is the case in a{" "}
            <span className="fontWeightBold colorSec">live casino</span> where
            individuals are required to be assured that the money they possess
            and other individual details are safe throughout the gameplay. This
            is why Panalobet provides absolute safety for both the website and
            the application, guarantees the safe handling of all private
            information, and lets the players have fun while playing without
            worry in the world.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet’s website carries the seal of approval of the Curaçao
            eGaming Authority, one of the oldest and most respected licensing
            jurisdictions in the online gaming business. This license is a mark
            of reliability and trustworthiness, therefore Panalobet complies
            with the regulations and laws that contribute to the clean work of
            the platform and the greatest safety of its players.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet is also affiliated with the Curaçao eGaming Authority
            which implies that Panalobet has to obey all the legislation that
            has been set down by the Curacao eGaming Authority. This is some
            assurance that players understand that the platform works under the
            law to meet all the requirements of offering secure and fair play.
            Its working principle is quite open and clear, and the casino goes
            through audits very frequently and has appropriate security measures
            when it comes to protecting data from breaches.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Security at Panalobet is promoted by modern technologies of SSL
            encryption and TSL Transport Security Layer that secure all the data
            and transactions. With such layers of security, the players will be
            able to play games in online casinos since their information will be
            safe with the sites.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            A few of the secure payment methods are bKash, PayTM, Nagad, Rocket,
            and Bank transfers Panalobet also has viable deposit and withdrawal
            options that include Philippines, Pakistan, and India players.
            Regardless of the currency, if players wish to make payment in local
            currencies such as PHP, PKR, or INR or the global methods such as
            Neteller, Skrill, Credit cards, etc., they are fully protected.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb20">
            Panalobet is available for customers 24/7 through live chat and
            online support services in telegram or Facebook messenger. There is
            also a nice range of bonus promotions available at the casino Common
            bonuses are Welcome Bonus, Daily Rebate, and Refer and Earn Bonus.
          </p>

          <table class="customTable mb20 boxShadow1 borderRadius1">
            <tr>
              <td class="descriptions titleColumn">Brand</td>
              <td class="descriptions descriptionColumn">Panalobet</td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Established Year</td>
              <td class="descriptions descriptionColumn">2015</td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">License(s)</td>
              <td class="descriptions descriptionColumn">
                Curaçao eGaming Authority
              </td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">iGaming Products</td>
              <td class="descriptions descriptionColumn">
                Live Casino, Slots, Sportsbook, Lottery, Fishing, Arcade
              </td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">
                Acceptable Payment Methods
              </td>
              <td class="descriptions descriptionColumn">
                bKash, UPI, PayTM, Nagad, Rocket, Bank Transfer, OK Wallet
              </td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Accepted Currencies</td>
              <td class="descriptions descriptionColumn">PHP, PKR, INR</td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Bonus Offers</td>
              <td class="descriptions descriptionColumn">
                Welcome Bonus, Deposit Bonus, Cashback, Referral Bonus
              </td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Minimum Deposit</td>
              <td class="descriptions descriptionColumn">300 PHP</td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Countries of Operation</td>
              <td class="descriptions descriptionColumn">
                Philippines, Pakistan, India
              </td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Customer Support</td>
              <td class="descriptions descriptionColumn">
                24/7 CS Chat, Telegram, Email, Facebook Messenger
              </td>
            </tr>
            <tr>
              <td class="descriptions titleColumn">Security</td>
              <td class="descriptions descriptionColumn">
                SSL Encryption, TSL Encryption
              </td>
            </tr>
          </table>

          <p className="descriptions textAlignmentLeft colorReg1">
            Through this trusted and secure platform, Panalobet has become the
            best destination for{" "}
            <span className="fontWeightBold colorSec">
              online casino lovers
            </span>{" "}
            in the Philippines, Pakistan as well as India.
          </p>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Panalobet Online: Pioneering a New Era of Gaming and Entertainment
            in the Philippines
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            The advancement of Panalobet Online has led to manufacturing an
            extraordinary boost in the online entertainment sector in the
            Philippines. This platform incorporates the latest technology in the
            world with a profound culture of game development and the gaming
            industry in the region to deliver a fitting environment that will
            enable supporters of online casinos as well as aficionados of other
            online games to engage in their activity without any reservations.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet has revolutionized the gaming aspect into a new-age wonder
            that entices modern players to game like never before. Bringing you
            a wide range of games, from{" "}
            <span className="fontWeightBold colorSec">live casino</span> and
            high stakes slots, it gives players control over their future in
            this immersive gaming world. It makes no difference if it is
            spinning the reels or betting on the live games as players can get
            everything throughout their screens.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            The platform is real and unique for users to experience the thrill
            of{" "}
            <span className="fontWeightBold colorSec">
              real online casino games
            </span>{" "}
            that imitate the actual casino. The beauty of every game is also
            presented by Panalobet as they present baccarat strategies that even
            involve detailed game coverage of a band sophisticated and intricate
            manner and the progressive jackpot thrills in online gambling.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            The unique selling point that sets Panalobet apart is that it
            strives to bring the physical and virtual spaces together. What is
            more, they can communicate with other people, friends or foe,
            challenge the best ones, and cheer their triumphs. Panalobet is not
            a simple gaming site—it is a community of people, who play games and
            share their passion and achievements to create an atmosphere of
            friendly competition.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            With the coming of Panalobet Online, it marks a new dawn for digital
            gaming services in the Philippines. Engaging gameplay, smooth
            transactions through bKash, Nagad, and UPI along with plenty of
            bonuses to earn, Panalobet lets players create their own legends and
            win. With virtual spaces glowing, gaming dreams are not a
            restriction anymore — players from the Philippines have boundless
            opportunities to face today.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Panalobet Offers a Wide Variety of Games: Join the Fun Today!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            Panalobet is not only a sportsbook platform, it has a lot more to
            offer in terms of casino games for all types of players. Expect only
            the
            <span className="fontWeightBold colorSec">
              best live casino
            </span>{" "}
            with providers like Evolution Gaming, Microgaming, Playtech, and
            Sexy Gaming, and get to play other interesting table games provided
            by KA Gaming, WorldMatch, BPoker, and LudoBet
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Leading the Way: High-End Game Providers for Online Casinos
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            Quality is the first concern in the Panalobet online betting
            platform. On their website, their software offers games that are not
            available on other websites from the same developers such as RT, SG,
            JDB, JILI, and CQ9 Gaming. If you like slots or prefer games with
            actions and decisions, these games will make your life brighter and
            more intriguing.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">Online Lottery Games</h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            Experience the possibilities of the future of lotteries with the
            help of Panalobet online lottery games. It is easy to participate in
            as most of them are electronic, they also save a lot of money in
            comparison with the previous ones, and that success is always fair.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">Fishing Games</h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            If you enjoy virtual fishing, Panalobet has developed a unique
            solution for catching the biggest fish right from the couch at home.
            Such games as virtual fishing are true copies of sea fishing but are
            conducted in front of the computer displays and involve both, the
            act of dividing skills and fun.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Experience Gaming Excellence: Panalobet’s Premier Game Providers
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Established as the online hub for{" "}
            <span className="fontWeightBold colorSec">Free online casinos</span>
            , entertainment, and wagering, Panalobet values quality above all
            else. High-quality games are made available to our players since we
            work closely with some of the leading game developers. The company
            mission of Panalobet being ‘Excellence’ is therefore instituted to
            ensure that the firm delivers premium gaming services that offer the
            players lifetime memories.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            Some leading game suppliers are RT, SG, JDB, JILI, and CQ9 Gaming
            have formed their name in the world of{" "}
            <span className="fontWeightBold colorSec">online casinos</span> and
            are continuously coming up with unique creations. Regardless of
            whether you enjoy playing slots and casino games, betting live
            dealers or wagering on your favorite sports – you will surely find
            many interesting opportunities at Panalobet that will match your
            desires. We create and design our games to be aesthetically
            excellent and gameplay engaging to guarantee fun each time you play.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Panalobet User Interface: Designed for a Smooth and Engaging
            Experience
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            The Panalobet provides a stunning and ease-to-navigate interface,
            which has been created with maximum details to deliver better casino
            gaming. A combination of engaging 3d images and a sensual color
            palette makes the website look like a real casino; while smoothly
            moving animations on any gadgets. It doesn’t matter if players are
            using their mobile, tablet, or personal computer; Panalobet
            guarantees the best user experience so players may truly enjoy their
            gaming experience. Don’t miss your chance for a perfect registration
            process and be amazed at the time we’ve spent creating this simple
            and friendly interface.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Panalobet Bonuses & Promotions: Unlock Bigger Rewards
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            At Panalobet, we offer new players additional incentives so that
            they can enjoy your betting even more. Our sports betting newcomers
            especially are going to love our 150% up to 3,000 PHP welcome bonus
            to get you started! Even lovers of slots are not left out as we
            offer you a 100% welcome bonus of up to 10,000 PHP to increase your
            odds and explore the exciting slots space. By employing these
            bonuses you can commence the process of gaming with more desires and
            the probability of getting ample amounts.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Panalobet Casino Signup & Deposit: A Seamless Experience
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            It is very simple to become a member at Panalobet Casino through the
            following few steps and sign up to start playing your favorite
            games. Here's how to register and start playing:
          </p>
          <ul className="plr50">
            <li className="pb10">
              <p className="descriptions textAlignmentLeft colorReg1">
                <span className="textAlignmentLeft fontWeightBold">1.</span>{" "}
                Click on the “Sign Up” button from the homepage.
              </p>
            </li>
            <li className="pb10">
              <p className="descriptions textAlignmentLeft colorReg1">
                <span className="textAlignmentLeft fontWeightBold">2.</span>{" "}
                Enter your personal and login details.
              </p>
            </li>
            <li className="pb10">
              <p className="descriptions textAlignmentLeft colorReg1">
                <span className="textAlignmentLeft fontWeightBold">3.</span>{" "}
                Choose your preferred currency.
              </p>
            </li>
            <li className="pb10">
              <p className="descriptions textAlignmentLeft colorReg1">
                <span className="textAlignmentLeft fontWeightBold">4.</span>{" "}
                Activate your account and make your first deposit.
              </p>
            </li>
          </ul>
          <p className="descriptions textAlignmentLeft colorReg1">
            You can receive a{" "}
            <span className="fontWeightBold colorSec">Welcome Bonus</span>
            immediately upon account activation, and it will allow you to
            receive up to{" "}
            <span className="fontWeightBold colorSec">50% of 7,777 PHP</span>.
            This is a good chance to improve the balance and get to know the
            promotional points of the casino.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Effortless and Secure: Panalobet Casino’s Trusted Payment Methods
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            Panalobet Casino deposits and withdrawals include several reliable
            methods to help players from Southeast Asia countries. You can
            participate in the program using our e-commerce site through bank
            transfer, bKash, SureCash, Rupay-O, ok Wallet, and iPay. These
            methods are secure and fast, thus enabling players from the
            Philippines, Pakistan, and India as well as others to make smooth
            transactions.
          </p>
        </div>

        <div className="compartmentStackedLayoutLeft">
          <h2 className="heading2 colorSec pb30">
            Download the Panalobet Casino Mobile App: Gaming Anytime, Anywhere!
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1">
            In the case of mobile gaming Panalobet has developed its mobile
            application that is quite easy to use and can be installed on both
            Android as well as on iOS. This mobile version provides the players
            with a perfect chance to gamble without being limited by place,
            time, or type of games offered and it can include{" "}
            <span className="fontWeightBold colorSec">live casino games</span>,
            slots, and even sports bets. Anyone who is hesitant to download the
            app, still has the option of using their mobile browser to access
            the said platform to ensure optimum freedom and ease.
          </p>
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayoutLeft mb60">
          <h2 className="heading2 colorSec pb30">
            Get Help Anytime: Panalobet Casino Customer Support Services
          </h2>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            On Panalobet, customers can always approach the players’ support
            desk for help any time. I have also included live chat support which
            is available around the clock to assist or to answer to anyone’s
            concerns they might have. Besides, players can use the support
            tickets at support@Panalobet.com for additional details and
            information. Although phone support is not available at the moment,
            Panalobet is very present on various social media including
            Facebook, Twitter, Instagram, and even on a Telegram channel.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Southeast Asian viewers may also be tempted to look for similar game
            options like{" "}
            <span className="fontWeightBold colorSec">
              Online Casino Philippines
            </span>
            for localized websites.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1 pb10">
            Panalobet Casino is not just a casino but a place where players get
            a real-time, safe, and easy experience to play games in particular
            from the Philippines, Pakistan, and India. The Panalobet online
            casino is complete with slot games, live casino, secure payment
            methods, and quick customer service available around the clock.
          </p>
          <p className="descriptions textAlignmentLeft colorReg1">
            Sign up now and enjoy the attractive welcome bonus and other
            promotions and start exploring an extraordinary world of online
            casinos!
          </p>
        </div>

        {/* Blog Card Grid */}
        <div className="flexboxGrid">
          {blogs.map((blogs, index) => (
            <BlogCard
              key={blogs.id}
              ref={(el) => (blogCardRefs.current[index] = el)}
              image={blogs.image}
              title={blogs.title}
              description={blogs.description}
              link={blogs.link}
              buttonText={blogs.buttonText}
            />
          ))}
        </div>
      </section>

      <section className="singleCompartment ptb60 plr5perc overflowXHorizontalHidden">
        <div className="compartmentStackedLayout">
          <h2 className="heading2 colorSec pb30">FAQs for Panalobet Casino</h2>
          <div className="compartmentStackedLayout">
            <FAQAnimation
              question="How do I create an account on Panalobet Casino?"
              answer="To sign up, go to the homepage of our website click the “Sign Up” button, input your personal data, and complete the procedure by following the link in the received email."
            />
            <FAQAnimation
              question="Is Panalobet Casino secure and safe?"
              answer="Yes, Panalobet Casino of course always prioritizes the security of its players. All our data, whether personal information or finances are secured through the use of the latest encryption on the website and application. This implies that you can play video games without worrying about your data being compromised by mad hackers."
            />
            <FAQAnimation
              question="What forms of payment may I use to make deposits and withdrawals?"
              answer="Banking and Gcash, bKash, and PayTM are offered as deposit and withdrawal means at Panalobet Casino. By doing so, players can also affect their transactions with ease and security through a number of payment options."
            />
            <FAQAnimation
              question="Is customer service available twenty-four hours a day?"
              answer="Yes, we do have an operational customer service Department who is always willing to attend to any of your queries. It is also possible to text us via live chat, email, or through the social platform including a Facebook message. This is the place where we are to ensure that you have a great time playing games for real money."
            />
            <FAQAnimation
              question="Are new players allowed any Bonus & promotions?"
              answer="Absolutely! As for the bonuses offered to the new players of Panalobet Casino, there are the welcome bonuses and the free sign-up bonuses available. We want to give you that exciting kickstart to your gaming experience, so do not forget to visit our promotions section to find out more."
            />
            <FAQAnimation
              question="Can I use my mobile device to access Panalobet Casino?"
              answer="Yes, it has support for Panalobet Casino from your mobile device, you can play casino games through this. You can gamble on our site whenever and wherever you choose because many of our items have mobile versions. If you often play games through your phone or a tablet then you will not experience any hiccup while gaming."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
