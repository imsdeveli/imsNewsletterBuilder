// import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./Components/InputForm.js";

import Display from "./Components/Display";

import axios from "axios";
import cheerio from "cheerio";

import { titleCase } from "title-case";

import { React, useState } from "react";

export default function App() {
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

  // let initialTemplate = { template: "" };
  // let initialArtAd = {
  //   input: "",
  //   URL: "",
  //   Head: "",
  //   Bod: ""
  // };

  const [state, setState] = useState(appData);
  // const [template, setTemplate] = useState(initialTemplate);

  const [ar2, setAr2] = useState({
    input: "",
    URL: "",
    Head: "",
    Bod: ""
  });
  const [ar1, setAr1] = useState({
    input: "",
    URL: "",
    Head: "",
    Bod: ""
  });
  const [ar3, setAr3] = useState({
    input: "",
    URL: "",
    Head: "",
    Bod: ""
  });
  const [ad1, setAd1] = useState({
    input: "",
    URL: "",
    Head: "",
    Bod: "",
    Call: ""
  });
  const [ad2, setAd2] = useState({
    input: "",
    URL: "",
    Head: "",
    Bod: "",
    Call: ""
  });
  const [ad3, setAd3] = useState({
    input: "",
    URL: "",
    Head: "",
    Bod: "",
    Call: ""
  });
  // const [formData, setFormData] = useState(nlData);

  // useEffect(() => {
  //   pullData();
  // })

  // const callUpdate = () => {
  //   console.log("CallUpdate");
  //   setState({
  //     template: formData.template,
  //     ar1: {
  //       ...state.ar1,
  //       input: formData.ar1Input
  //     },
  //     ad1: {
  //       ...state.ad1,
  //       input: formData.ad1Input
  //     },
  //     ar2: {
  //       ...state.ar2,
  //       input: formData.ar2Input
  //     },
  //     ad2: {
  //       ...state.ad2,
  //       input: formData.ad2Input
  //     },
  //     ar3: {
  //       ...state.ar3,
  //       input: formData.ar3Input
  //     },
  //     ad3: {
  //       ...state.ad3,
  //       input: formData.ad3Input
  //     }
  //   });
  // };

  // const updateAll = (formState) => {
  //   addData(formState);
  //     pullData();

  // };
  const addData = (formState) => {
    console.log("addData", formState);
    setState(formState);
    // pullData();

    // callUpdate();
  };
  const pullData = () => {
    handleArticle1(state.ar1.input);
    handleAd1(state.ad1.input);
    handleArticle2(state.ar2.input);
    handleAd2(state.ad2.input);
    handleArticle3(state.ar3.input);
    handleAd3(state.ad3.input);
  };

  const cutBody = (response) => {
    let $ = cheerio.load(response.data);

    let pTags = $(".entry-content").find("p");
    pTags = $(pTags).contents();
    let bodArray = [];

    $(pTags).each(function (i, e) {
      bodArray[i] = $(e).text();
    });

    bodArray.splice(0, 2);
    let bodString = bodArray.join("");
    bodString = bodString.substring(0, 300);
    bodString = bodString.concat("...");

    console.log("bodArray: ", bodArray);
    console.log("bodString:   ", bodString);
    return bodString;
  };
  const cutBodyPTR = (response) => {
    let $ = cheerio.load(response.data);

    let pTags = $(".thecontent").find("p");
    pTags = $(pTags).contents();
    let bodArray = [];

    $(pTags).each(function (i, e) {
      bodArray[i] = $(e).text();
    });

    bodArray.splice(0, 2);
    let bodString = bodArray.join("");
    bodString = bodString.substring(0, 300);
    bodString = bodString.concat("...");

    console.log("bodArray: ", bodArray);
    console.log("bodString:   ", bodString);
    return bodString;
  };

  const handleAd1 = (adInput) => {
    console.log("ad1Input", adInput);

    const input = `<html>${adInput}</html>`;
    let $ = cheerio.load(input);

    // let body = $[0]
    // console.log("boddddy", body);
    // let bodyy = body
    // console.log("boddddyy", bodyy);
    // body = $(body).toArray();
    // console.log("boddddy", body);
    $("html").each((index, element) => {
      let url = $("a").attr("href");
      // let body = $("body")[0].children[3].data;
      let head = $("span").text();
      let body = $(element).text();
      let call = $("a").text();
      body = body.replace(`${head}`, " ");
      body = body.replace(`${call}`, " ");
      body = body.trim();
      body = body.toString();

      head = titleCase(head);

      setAd1({
        input: adInput,
        URL: url,
        Head: head,
        Bod: body,
        Call: call
      });
      console.log("Ad1 Head", head);
      console.log("Ad1 Call", call);
      console.log("Ad1 Body", body);
      console.log("Ad1 URL", url);
    });
    return;
  };
  const handleAd2 = (adInput) => {
    console.log("ad2Input", adInput);

    const input = `<html>${adInput}</html>`;
    let $ = cheerio.load(input);

    $("html").each((index, element) => {
      let url = $("a").attr("href");
      // let body = $("body")[0].children[3].data;
      let head = $("span").text();
      let body = $(element).text();
      let call = $("a").text();
      body = body.replace(`${head}`, " ");
      body = body.replace(`${call}`, " ");
      body = body.trim();
      body = body.toString();

      head = titleCase(head);

      setAd2({
        input: adInput,
        URL: url,
        Head: head,
        Bod: body,
        Call: call
      });
      console.log("Ad2 Head", head);
      console.log("Ad2 Call", call);
      console.log("Ad2 Body", body);
      console.log("Ad2 URL", url);
    });
    return;
  };

  const handleAd3 = (adInput) => {
    console.log("ad3Input", adInput);

    const input = `<html>${adInput}</html>`;
    let $ = cheerio.load(input);

    $("html").each((index, element) => {
      let url = $("a").attr("href");
      // let body = $("body")[0].children[3].data;
      let head = $("span").text();
      let body = $(element).text();
      let call = $("a").text();
      body = body.replace(`${head}`, " ");
      body = body.replace(`${call}`, " ");
      body = body.trim();
      body = body.toString();

      head = titleCase(head);

      setAd3({
        input: adInput,
        URL: url,
        Head: head,
        Bod: body,
        Call: call
      });
      console.log("Ad3 Head", head);
      console.log("Ad3 Call", call);
      console.log("Ad3 Body", body);
      console.log("Ad3 URL", url);
    });
    return;
  };

  const handleArticle1 = (ArInput) => {
    console.log("Ar1Input", ArInput);

    const theUrl = `${ArInput}`;
    const theHeaders = { "Access-Control-Allow-Origin": "*" };

    if (
      theUrl.includes("thecheapinvestor") ||
      theUrl.includes("activetradernews")
    ) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBody(response);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".page-title").text();
            title = titleCase(title);
            setAr1({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("TheCheapInvestor URL:", url);
            console.log("TheCheapInvestor title:", title);
            console.log("TheCheapInvestor body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("protradingresearch")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBodyPTR(response);

          $(".single_post").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".title").text();
            title = titleCase(title);

            setAr1({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("PTR URL:", url);
            console.log("PTR title:", title);
            console.log("PTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("optionstradingreport")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBody(response);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".entry-title").text();
            title = titleCase(title);

            setAr1({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("OTR URL:", url);
            console.log("OTR title:", title);
            console.log("OTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    }
    return;
  };
  const handleArticle2 = (ArInput) => {
    console.log("Ar2Input", ArInput);

    const theUrl = `${ArInput}`;
    const theHeaders = { "Access-Control-Allow-Origin": "*" };

    if (
      theUrl.includes("thecheapinvestor") ||
      theUrl.includes("activetradernews")
    ) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBody(response);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".page-title").text();
            title = titleCase(title);

            setAr2({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("TheCheapInvestor URL:", url);
            console.log("TheCheapInvestor title:", title);
            console.log("TheCheapInvestor body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("protradingresearch")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBodyPTR(response);

          $(".single_post").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".title").text();
            title = titleCase(title);

            setAr2({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("PTR URL:", url);
            console.log("PTR title:", title);
            console.log("PTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("optionstradingreport")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBody(response);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".entry-title").text();
            title = titleCase(title);

            setAr2({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("OTR URL:", url);
            console.log("OTR title:", title);
            console.log("OTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    }
    return;
  };
  const handleArticle3 = (ArInput) => {
    console.log("Ar3Input", ArInput);

    const theUrl = `${ArInput}`;
    const theHeaders = { "Access-Control-Allow-Origin": "*" };

    if (
      theUrl.includes("thecheapinvestor") ||
      theUrl.includes("activetradernews")
    ) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBody(response);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".page-title").text();
            title = titleCase(title);

            setAr3({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("TheCheapInvestor URL:", url);
            console.log("TheCheapInvestor title:", title);
            console.log("TheCheapInvestor body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("protradingresearch")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBodyPTR(response);

          $(".single_post").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".title").text();
            title = titleCase(title);

            setAr3({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("PTR URL:", url);
            console.log("PTR title:", title);
            console.log("PTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    } else if (theUrl.includes("optionstradingreport")) {
      axios
        .get(theUrl, theHeaders)
        .then((response) => {
          let $ = cheerio.load(response.data);
          let body = cutBody(response);

          $(".site-content").each((index, element) => {
            let url = ArInput;
            let title = $(element).find(".entry-title").text();
            title = titleCase(title);

            setAr3({
              input: ArInput,
              URL: url,
              Head: title,
              Bod: body
            });
            console.log("OTR URL:", url);
            console.log("OTR title:", title);
            console.log("OTR body:", body);
          });
        })
        .catch((error) => console.log("error", error));
    }
    return;
  };

  // function handleCopyClick() {
  //   /* Save value of myText to input variable */
  //   var input = document.getElementById("copyMe").value;

  //   /* Copy the text inside the text field */
  //   navigator.clipboard.writeText(input);

  //   alert("Copied Text: " + input);
  // }
  return (
    <div class="App">
      <div
        class="container-fluid p-4"
        style={{ "background-color": "#000000" }}
      >
        <div class="row">
          {" "}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5e53f316f98ebd7769247a4e/1582563554920-AHCM2PZC0D0IHBGXZ3WV/logo1.png"
              style={{ maxWidth: "200px" }}
              alt=""
            />{" "}
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 p-4">
            <h2>Newsletter Builder</h2>
            <p class="small">
              First select the email template you'd like to use, and then fill
              in each respective field. For articles, input the full article
              URL. For advertisements, insert the code snippet given by
              HasOffers
            </p>
            <InputForm addData={addData} pullData={pullData} />
          </div>
          <div class="col-9 p-4">
            <Display
              pullData={pullData}
              state={state}
              ar1={ar1}
              ar2={ar2}
              ar3={ar3}
              ad1={ad1}
              ad2={ad2}
              ad3={ad3}
            />
          </div>
        </div>
        {/* <div class="grid-child c">
          <h2> Here! </h2>
        </div> */}
      </div>
    </div>
  );
}
