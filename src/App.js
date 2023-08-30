import { quotes, colors } from "./data";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });
  const [color, setColor] = useState("");
  const [quoteAnimation, setQuoteAnimation] = useState(false);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []); // Empty dependency array to run only on initial render

  function changeQuote() {
    setQuoteAnimation(true);
    setTimeout(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setColor(colors[Math.floor(Math.random() * colors.length)]);
      setQuoteAnimation(false);
    }, 1000);
  }

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center transition-all ${color}`}
    >
      <div
        className={`quote-box container mx-auto w-2/5 rounded bg-white p-12 shadow-lg`}
      >
        <p
          className={`pb-5 text-center text-3xl font-medium ${
            quoteAnimation ? "animate-quote" : ""
          }`}
          style={{ fontFamily: "Raleway" }}
        >
          {quote.quote}
          <FormatQuoteIcon
            className={`text-center text-6xl`}
            fontSize="large"
            id="text"
          />
        </p>
        <p
          className={`mb-5 pb-5 text-right ${
            quoteAnimation ? "animate-quote" : ""
          }`}
          id="author"
        >
          - {quote.author}
        </p>
        <div id="buttons" className={`flex flex-row justify-between`}>
          <div className="flex flex-row justify-evenly">
            <a
              className={`mr-3 block rounded p-3 text-white ${color}`}
              href={`https://wa.me/?text=${quote.quote} - ${quote.author}`}
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
            </a>
            <a
              className={`mr-3 block rounded p-3 text-white ${color}`}
              href={`https://www.instagram.com/?text=${quote.quote} - ${quote.author}`}
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              className={`mr-3 block rounded p-3 text-white ${color}`}
              href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              className={`mr-3 block rounded p-3 text-white ${color}`}
              href={`https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/pen/?template=KKzQmyZ`}
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
          <div>
            <button
              className={`rounded p-3 text-white ${color}`}
              onClick={changeQuote}
              id="new-quote"
            >
              New Quote
            </button>
          </div>
        </div>
        <p className="pt-10 text-center">
          With ❤ By{" "}
          <a
            href="https://github.com/mazam5"
            className={`${color.replace("bg-", "text-")}`}
            target="_blank"
            rel="noreferrer"
          >
            Azam
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

/*
Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://random-quote-machine.freecodecamp.rocks/.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Note: Twitter does not allow links to be loaded in an iframe. Try using the target="_blank" or target="_top" attribute on the #tweet-quote element if your tweet won't load. target="_top" will replace the current tab so make sure your work is saved.
*/
