import React, { useState } from "react";
// import axios from "axios";
// import cheerio from "cheerio";
import "bootstrap/dist/css/bootstrap.min.css";

const InputForm = (props) => {
  const initialFormState = {
    ar1Input: "",
    ad1Input: "",
    ar2Input: "",
    ad2Input: "",
    ar3Input: "",
    ad3Input: "",
    template: ""
  };
  let appData = {
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
  const [state, setState] = useState(appData);
  const [nlURLS, setnlURLS] = useState(initialFormState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setnlURLS({ ...nlURLS, [name]: value });
    // setState({
    //   template: nlURLS.template,
    //   ar1: {
    //     ...state.ar1,
    //     input: nlURLS.ar1Input
    //   },
    //   ad1: {
    //     ...state.ad1,
    //     input: nlURLS.ad1Input
    //   },
    //   ar2: {
    //     ...state.ar2,
    //     input: nlURLS.ar2Input
    //   },
    //   ad2: {
    //     ...state.ad2,
    //     input: nlURLS.ad2Input
    //   },
    //   ar3: {
    //     ...state.ar3,
    //     input: nlURLS.ar3Input
    //   },
    //   ad3: {
    //     ...state.ad3,
    //     input: nlURLS.ad3Input
    //   }
    // });

    // props.addData(state);
    //  props.addData(nlURLS);
  };

  return (
    <div class="col">
      <div class="form-box">
        <form
          class="c-form"
          id="inputForm"
          onSubmit={(event) => {
            event.preventDefault();
            // if (
            //   !nlURLS.ar1Input ||
            //   !nlURLS.ar2Input ||
            //   !nlURLS.ar3Input ||
            //   !nlURLS.ad1Input ||
            //   !nlURLS.ad2Input ||
            //   !nlURLS.ad3Input
            // )
            //   return;
            setState({
              template: nlURLS.template,
              ar1: {
                ...state.ar1,
                input: nlURLS.ar1Input
              },
              ad1: {
                ...state.ad1,
                input: nlURLS.ad1Input
              },
              ar2: {
                ...state.ar2,
                input: nlURLS.ar2Input
              },
              ad2: {
                ...state.ad2,
                input: nlURLS.ad2Input
              },
              ar3: {
                ...state.ar3,
                input: nlURLS.ar3Input
              },
              ad3: {
                ...state.ad3,
                input: nlURLS.ad3Input
              }
            });

            props.addData(state);
            props.addData(state);

            // setnlURLS(initialFormState);
          }}
        >
          <label>Newsletter Template</label>
          <br />
          <br />

          {/* <div>
        <input
          type="text"
          name="template"
          placeholder=" Please type ATN, OTR, PTR, TCI, or WIA"
          value={nlURLS.template}
          onChange={handleInputChange}
        />
      </div> */}
          <div>
            <div class="mb-3">
              ATN
              <input
                class="form-check-input"
                type="radio"
                id="ATN"
                name="template"
                value="ATN"
                checked={nlURLS.template === "ATN"}
                onChange={handleInputChange}
              />
              OTR
              <input
                class="form-check-input"
                type="radio"
                id="OTR"
                name="template"
                value="OTR"
                checked={nlURLS.template === "OTR"}
                onChange={handleInputChange}
              />
              PTR
              <input
                class="form-check-input"
                type="radio"
                id="PTR"
                name="template"
                value="PTR"
                checked={nlURLS.template === "PTR"}
                onChange={handleInputChange}
              />
              TCI
              <input
                class="form-check-input"
                type="radio"
                id="TCI"
                name="template"
                value="TCI"
                checked={nlURLS.template === "TCI"}
                onChange={handleInputChange}
              />
              WIA
              <input
                class="form-check-input"
                type="radio"
                id="WIA"
                name="template"
                value="WIA"
                checked={nlURLS.template === "WIA"}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Article 1</label>
            <input
              class="form-control form-control-sm"
              type="text"
              name="ar1Input"
              value={nlURLS.ar1Input}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Article 2</label>
            <input
              class="form-control form-control-sm"
              type="text"
              name="ar2Input"
              value={nlURLS.ar2Input}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Article 3</label>
            <input
              class="form-control form-control-sm"
              type="text"
              name="ar3Input"
              value={nlURLS.ar3Input}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Ad 1</label>
            <textarea
              class="form-control form-control-sm"
              // type="text"
              name="ad1Input"
              value={nlURLS.ad1Input}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Ad 2</label>
            <textarea
              class="form-control form-control-sm"
              // type="text"
              name="ad2Input"
              value={nlURLS.ad2Input}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Ad 3</label>
            <textarea
              class="form-control form-control-sm"
              // type="text"
              name="ad3Input"
              value={nlURLS.ad3Input}
              onChange={handleInputChange}
            />
          </div>

          <div class="d-grid gap-2">
            <input class="btn btn-success" type="submit" value="Save" />
          </div>
          {/* <button class="c-form-btn">Refresh</button> */}
        </form>
      </div>
    </div>
  );
};

export default InputForm;
