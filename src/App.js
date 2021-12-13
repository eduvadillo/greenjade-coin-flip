import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import heads from "./images/heads.png";
import max from "./images/max.png";
import mobile from "./images/mobile.png";
import crown from "./images/crown.png";
import gameLogo from "./images/gameLogo.png";
import logo1 from "./images/1.png";
import logo2 from "./images/2.png";
import logo3 from "./images/4.png";
import logo4 from "./images/5.jpg";
import logo5 from "./images/6.png";
import logo6 from "./images/7.png";
import mga from "./images/mga.png";
import age18 from "./images/18.png";
import facebook from "./images/flat_facebook.png";
import instagram from "./images/flat_instagram.png";
import linkedin from "./images/flat_linkedin.png";
import youtube from "./images/flat_youtube.png";
import casasoft from "./images/casasoft.png";

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <div className='section1'>
          <div className='section1-left'>
            <img className='section1-img-left' src={heads}></img>
          </div>
          <div className='section1-right'>
            <div className='section-2-parrafos'>
              <h1 className='h1-right'>
                <b>Coin Flip 2 - Online Coin Flip </b>
              </h1>
              <p className='p1-right'>
                <b>The legend of flipping a coin – Coin Flip Deluxe </b>
              </p>
              <p>
                <span className='p1-right'>
                  <b>The oldest gambling game </b>
                </span>
                in the world goes online with an edge to the house. Coin flips has started world cup
                matches in football and ended conflicts – and of course been a leisure game since
                the conception of the coin. Everyone knows how to play it and everyone knows how to{" "}
                <span className='p1-right'>
                  {" "}
                  <b>double their money </b>
                </span>{" "}
                playing it.
              </p>
              <p>
                It's easy, it's thrilling and{" "}
                <span className='p1-right'>
                  <b> its fair </b>
                </span>
                !
              </p>
              <p>
                {" "}
                <span className='p1-right'>
                  {" "}
                  <b>Coin flipping </b>
                </span>
                , coin tossing and heads or tails online.{" "}
                <span className='p1-right'>
                  {" "}
                  <b>Coin flipping Deluxe </b>
                </span>{" "}
                is the
                <span className='p1-right'>
                  {" "}
                  <b>perfect leisure game </b>
                </span>{" "}
                , accessible via both desktop and mobile, wherever you are, at any time. On the
                mobile you just swipe your thumb with a{" "}
                <span className='p1-right'>
                  {" "}
                  <b>true flip motion </b>
                </span>{" "}
                and wait for the head or tail to make you{" "}
                <span className='p1-right'>
                  <b> rich</b>
                </span>
                .
              </p>
              <button className='buttonRight'>
                {" "}
                <b>TRY COIN FLIP 2 FOR FREE HERE! </b>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='section2-left'>
            <div className='div-sec2-img'>
              <img className='section2-img-right2' src={max}></img>
            </div>
            <div className='section-2-parrafos'>
              <h1 className='p1-right'>
                <b>How does Coin Flip 2 work? </b>
              </h1>
              <p>
                Take the chance to{" "}
                <span className='p1-right'>
                  <b>double your bet</b>
                </span>{" "}
                by choosing which side the coin will land on. Choose between heads or crowns, the
                winning side is the side facing upwards.
              </p>
              <p>
                <span className='p2-number-color'>
                  <b>1 </b>
                </span>
                <b> Start with select your bet amount. </b>
              </p>
              <p>
                <span className='p2-number-color'>
                  <b>2 </b>
                </span>
                <b>Choose heads or crowns. </b>
              </p>
              <p>
                <span className='p2-number-color'>
                  <b>3 </b>
                </span>
                <b>Finally, flip the coin! </b>
              </p>
              <p>
                Coin Flip Deluxe is an
                <span className='p1-right'>
                  <b> online casino game </b>
                </span>
                with a 3% edge to the house and 3-100x bonus round for the player. This is possible
                due to the fact that the coin can land on the edge (which can actually happened with
                a standard coin as well).
              </p>
              <p>
                Landing on the edge it’s a bit like hitting the green in Roulette when playing red
                and black, but with one big difference. When it lands on the edge – it’s also a
                <span className='p1-right'>
                  <b> bonnus opportunity </b>
                </span>
                for the player. Land it on the edge again and you win 3-100x the stake.
              </p>
              <p>
                In Coin Flip Deluxe you can keep gambling until the default maximum playable value
                is reached, which is €500.
              </p>
              <button className='buttonRight'>
                {" "}
                <b>TRY THE GAME FOR FREE! </b>{" "}
              </button>
            </div>
          </div>
          <div className='section2-right'>
            <img className='section2-img-right' src={max}></img>
          </div>
        </div>
        <div className='section3'>
          <div className='section3-left'>
            <img className='section3-img-left' src={mobile}></img>
          </div>
          <div className='section3-right'>
            <div className='section-2-parrafos'>
              <h1 className='p1-right'>
                <b>Functions </b>
              </h1>
              <p>
                Every time a gamble is won, you have three different alternatives to choose from to
                continue the game and maximize your winnings from that gamble:
              </p>
              <p>
                <span className='p2-number-color'>
                  <b>1 </b>
                </span>
                <b> Collect: </b> Transfer the total winnings to your own balance. Continue the game
                by entering a new bet and a new coin flip round.
              </p>
              <p>
                <span className='p2-number-color'>
                  <b>2 </b>
                </span>
                <b>Bank 50%: </b> Transfer half the winning amount to your own balance and assign
                the other half to the next coin flip. As a player you can not choose 50% more than
                once after a winning flip.
              </p>
              <p>
                <span className='p2-number-color'>
                  <b>3 </b>
                </span>
                <b>Gamble: </b> If you neither choose bank 50% nor Collect , the total winning
                amount is used as a bet for the next round of coin flip.
              </p>
            </div>
          </div>
        </div>
        <div className='section4'>
          <div className='section4-left'>
            <img className='section4-img-left' src={crown}></img>
          </div>
          <div className='section4-right'>
            <div className='div-sec4-img'>
              <img className='section2-img-right2' src={crown}></img>
            </div>
            <div className='section-2-parrafos'>
              <h1 className='h1-right-section4'>Bonus flips</h1>
              <p>
                In every coin flip there is a chance the coin will land on the edge. Since we love
                bonuses almost as much as our players do, Coin Flip Deluxe offers a much higher
                possibility that the coin lands on the edge, than in a real coin flip.
              </p>
              <p>
                Once the
                <span className='p1-right'>
                  <b>bonus flip event is triggered </b>
                </span>
                , the coin will flip automatically if you don’t flip it manually within five
                seconds.
              </p>
              <p>
                If the coin flip results is a losing edge flip, there is an opportunity to win a
                separate bonus prize. With no gamble at stake you get an
                <span className='p1-right'>
                  {" "}
                  <b>additional free flip </b>
                </span>{" "}
                . If the bonus flip results in a second edge, the
                <span className='p1-right'>
                  {" "}
                  <b>bonus prize is yours! </b>
                </span>{" "}
              </p>
              <p>
                The bonus prize is calculated by applying a random multiplier in the range of
                3x-100x to the gamble amount that was at stake when the initial edge was landed.
                Heads and crowns during the bonus flip are unfortunately losing results and have no
                cash value. When the Bonus flip experience is over, the game returns to its default
                state.
              </p>
              <button className='buttonRight'>
                {" "}
                <b>TRY COIN FLIP 2 FOR FREE HERE! </b>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className='section5'>
          <div className='section5-left'>
            <div className='div-sec4-img'>
              <img className='section2-img-right2' src={gameLogo}></img>
            </div>
            <div className='section-2-parrafos'>
              <h1 className='p5-right'>Play Coin Flip 2 for free!</h1>
              <p>
                You can easily and for
                <span className='p1-right'>
                  <b>free play Coin Flip Deluxe</b>
                </span>{" "}
                . Try to flip a coin online here.
              </p>
              <button className='buttonRight5'>
                {" "}
                <b>PLAY COIN FLIP 2 FOR FREE </b>{" "}
              </button>
            </div>
          </div>
          <div className='section5-right'>
            <img className='section5-img-right' src={gameLogo}></img>
          </div>
        </div>
        <div className='section6'>
          <div className='section5-left'>
            <div className='section-2-parrafos'>
              <h1 className='p5-right-sec6'>Play Coin flip deluxe online:</h1>
            </div>
          </div>
        </div>
        <div className='section7'>
          <div className='section-7-logos'>
            <img className='section7-img-right' src={logo4}></img>
            <img className='section7-img-right' src={logo2}></img>
            <img className='section7-img-right' src={logo5}></img>
            <img className='section7-img-right' src={logo1}></img>
            <img className='section7-img-right' src={logo6}></img>
            <img className='section7-img-right' src={logo3}></img>
          </div>
        </div>
        <div className='section8'>
          <div className='linea-sec8'>
            <hr className='line'></hr>
          </div>
          <div className='all-sec8'>
            <div className='section8-left'>
              <div className='div-sec8-img'>
                <img className='section8-img-mga' src={mga}></img>
              </div>
              <div className='section-8-parrafos'>
                <p>
                  Green Jade Games Ltd, having its registered address at 2 Ajiree Court,
                  Testaferrata Street, Ta’ Xbiex, Malta XBX 1402, is licensed and regulated by the
                  Malta Gaming Authority to supply Type 1 gaming services under a critical gaming
                  supply licence (Licence Number:MGA/B2B/673/2019, issued on 15th July 2019).
                </p>
              </div>
            </div>
            <div className='section8-right'>
              <img className='section8-img-right18' src={age18}></img>
              <div className='img-right-down'>
                <img className='section8-img-right2' src={linkedin}></img>
                <img className='section8-img-right2' src={youtube}></img>
                <img className='section8-img-right2' src={facebook}></img>
                <img className='section8-img-right2' src={instagram}></img>
              </div>
            </div>
          </div>
        </div>
        <div className='section9'>
          <div className='section9-left'>
            <div className='section-9-parrafos'>
              <p>© 2021 Green Jade Games All rights reserved</p>
            </div>
          </div>
          <div className='section9-right'>
            <img className='section9-img-right' src={casasoft}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
