import React, { useState } from "react";

const Former = (props) => {
  const initialFormState = {
    template: "",
    ar1: {
      input: "",
      URL: "",
      Head: "",
      Bod: ""
    },
    ad1: {
      input: "",
      URL: "",
      Head: "",
      Bod: ""
    },
    ar2: {
      input: "",
      URL: "",
      Head: "",
      Bod: ""
    },
    ad2: {
      input: "",
      URL: "",
      Head: "",
      Bod: ""
    },
    ar3: {
      input: "",
      URL: "",
      Head: "",
      Bod: ""
    },
    ad3: {
      input: "",
      URL: "",
      Head: "",
      Bod: ""
    }
  };

  const [nlURLS, setnlURLS] = useState(initialFormState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setnlURLS({ ...nlURLS, [name]: value });
    // props.addData(nlURLS);
  };

  return (
    <div id="container">
      <div class="form-box">
        <form
          class="c-form"
          id="inputForm"
          onSubmit={(event) => {
            event.preventDefault();
            // if (
            //   !nlURLS.ar1.input ||
            //   !nlURLS.ar2Input ||
            //   !nlURLS.ar3Input ||
            //   !nlURLS.ad1Input ||
            //   !nlURLS.ad2Input ||
            //   !nlURLS.ad3Input
            // )
            //   return;

            props.addData(nlURLS);
            // setnlURLS(initialFormState);
          }}
        >
          <label>Newsletter Template</label>
          <br />
          <label>Template</label>
          {/* <div>
        <input
          type="text"
          name="templat.i"
          placeholder=" Please type ATN, OTR, PTR, TCI, or WIA"
          value={nlURLS.template}
          onChange={handleInputChange}
        />
      </div> */}
          <div>
            ATN
            <input
              type="radio"
              id="ATN"
              name="template"
              value="ATN"
              checked={nlURLS.template === "ATN"}
              onChange={handleInputChange}
            />
            <br />
            OTR
            <input
              type="radio"
              id="OTR"
              name="template"
              value="OTR"
              checked={nlURLS.template === "OTR"}
              onChange={handleInputChange}
            />
            <br />
            PTR
            <input
              type="radio"
              id="PTR"
              name="template"
              value="PTR"
              checked={nlURLS.template === "PTR"}
              onChange={handleInputChange}
            />
            <br />
            TCI
            <input
              type="radio"
              id="TCI"
              name="template"
              value="TCI"
              checked={nlURLS.template === "TCI"}
              onChange={handleInputChange}
            />
            <br />
            WNA
            <input
              type="radio"
              id="WNA"
              name="template"
              value="WNA"
              checked={nlURLS.template === "WNA"}
              onChange={handleInputChange}
            />
          </div>

          <br />

          <label class="c-form-label">Article 1</label>
          <input
            type="text"
            name="ar1[input]"
            value={nlURLS.ar1.input}
            onChange={handleInputChange}
          />

          <br />

          <label>Ad 1</label>
          <input
            type="text"
            name="ad1.input"
            value={nlURLS.ad1.input}
            onChange={handleInputChange}
          />
          <br />

          <label>Article 2</label>
          <input
            type="text"
            name="ar2.input"
            value={nlURLS.ar2.input}
            onChange={handleInputChange}
          />
          <br />
          <label>Ad 2</label>
          <input
            type="text"
            name="ad2.input"
            value={nlURLS.ad2.input}
            onChange={handleInputChange}
          />

          <br />
          <label>Article 3</label>
          <input
            type="text"
            name="ar3.input"
            value={nlURLS.ar3.input}
            onChange={handleInputChange}
          />
          <br />
          <label>Ad 3</label>
          <input
            type="text"
            name="ad3.input"
            value={nlURLS.ad3.input}
            onChange={handleInputChange}
          />

          <br />
          <input type="submit" value="submit" />
          {/* <button class="c-form-btn">Refresh</button> */}
        </form>
      </div>
    </div>
  );
};

export default Former;
