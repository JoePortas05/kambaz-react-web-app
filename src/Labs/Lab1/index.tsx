export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag"> ... </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one. This is the
        second paragraph. Even though there is a deliberate white gap between
        the paragraph above and this paragraph, by default browsers render them
        as one contiguous piece of text as shown here on the right. This is the
        third paragraph. Wrap each paragraph with the paragraph tag to tell
        browsers to render the gaps.
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag"> ... </div>
      <div id="wd-p-tag"> ... </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes: 1. Mix dry ingredients. 2. Add wet ingredients. 3.
        Stir to combine. 4. Heat a skillet or griddle. 5. Pour batter onto the
        skillet. 6. Cook until bubbly on top. 7. Flip and cook the other side.
        8. Serve and enjoy!
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes"> ... </ol>
        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
          <li>Heat frozen veggies in a pan</li>
          <li>Mix in diced chicken breast seasonings</li>
          <li>
            When chicken is cooked, mix in fajita seasoning packet and 1cup
            water
          </li>
          <li>Let simmer for 5 minutes and enjoy!</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
      </div>
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>Harry Potter and the Goblet of Fire</li>
        <li>Frankenstein</li>
        <li>Hamlet</li>
        <li>Night</li>
      </ul>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JS</td>
              <td>2/17/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>HTML</td>
              <td>2/24/21</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>CSS</td>
              <td>3/03/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>JS</td>
              <td>3/10/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>HTML</td>
              <td>3/17/21</td>
              <td>79</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>CSS</td>
              <td>3/24/21</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>JS</td>
              <td>3/30/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>HTML</td>
              <td>4/06/21</td>
              <td>91</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-ga
p2.jpg"
        ></img>
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" />
      </div>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            value="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            value="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          {/* copy rest of form elements here */}
        </form>
      </div>
      {"Textareas"}
      <h5>Text boxes</h5>
      <label>Biography:</label>
      <br />
      <textarea id="wd-textarea" cols={30} rows={10}>
        Vestibulum nec luctus tellus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Nunc convallis
        fermentum malesuada. Sed gravida dolor quis purus scelerisque, nec
        accumsan ipsum vulputate. Integer non orci eget nisl tincidunt
        sollicitudin quis ac lorem. Aliquam et mauris arcu. Nullam aliquet
        turpis lectus, et ultrices libero dapibus at. Nam non metus ac dui
        scelerisque porta vitae sed mi. In feugiat purus nisi, ut euismod dolor
        porttitor nec. Phasellus quis vehicula mi, sed auctor diam. Nunc a leo
        eu enim venenatis ornare ut at est. Donec maximus ut dolor dictum
        tincidunt. Pellentesque sit amet sagittis dolor.
      </textarea>
      {"Clicking button pops up alert"}
      <h5 id="wd-buttons">Buttons</h5>
      <button
        type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good"
      >
        Hello World!
      </button>
      {"File upload button"}
      <input type="radio" name="NAME1" value="OPTION1" />
      <input type="radio" name="NAME1" value="OPTION2" checked />
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <input type="checkbox" name="NAME2" value="OPTION1" checked />
      <input type="checkbox" name="NAME2" value="OPTION2" />
      <input type="checkbox" name="NAME2" value="OPTION3" checked />
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
      <select>
        <option value="VAL1">Value 1</option>
        <option value="VAL2" selected>
          Value 2
        </option>
        <option value="VAL3">Value 3</option>
      </select>
      <select multiple>
        <option value="VAL1" selected>
          Value 1
        </option>
        <option value="VAL2">Value 2</option>
        <option value="VAL3" selected>
          Value 3
        </option>
      </select>
      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
      <br />
      <select multiple id="wd-select-many-genre">
        <option value="COMEDY" selected>
          {" "}
          Comedy{" "}
        </option>
        <option value="DRAMA"> Drama </option>
        <option value="SCIFI" selected>
          {" "}
          Science Fiction{" "}
        </option>
        <option value="FANTASY"> Fantasy </option>
      </select>
      <h4>Other HTML field types</h4>
      <label htmlFor="wd-text-fields-email"> Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />
      <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
      <input
        type="number"
        value="100000"
        placeholder="1000"
        id="wd-text-fields-salary-start"
      />
      <br />
      <label htmlFor="wd-text-fields-rating"> Rating: </label>
      <input
        type="range"
        value="4"
        max="5"
        placeholder="Doe"
        id="wd-text-fields-rating"
      />
      <br />
      <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
      <input type="date" value="2000-01-21" id="wd-text-fields-dob" />
      <br />
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>
      to get dummy text
      <br />
    </div>
  );
}
