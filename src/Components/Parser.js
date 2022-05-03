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
        console.log("response", response.data);
        let $ = cheerio.load(response.data);
        $(".site-content").each((index, element) => {
          let url = ArInput;
          let title = $(element).find(".page-title").text();
          let body = $(element).find(".content-area").text();

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
        console.log("response", response.data);
        let $ = cheerio.load(response.data);
        $(".single_post").each((index, element) => {
          let url = ArInput;
          let title = $(element).find(".title").text();
          let body = $(element).find(".thecontent").text();

          console.log("TheCheapInvestor URL:", url);
          console.log("TheCheapInvestor title:", title);
          console.log("TheCheapInvestor body:", body);
        });
      })
      .catch((error) => console.log("error", error));
  } else if (theUrl.includes("optionstradingreport")) {
    axios
      .get(theUrl, theHeaders)
      .then((response) => {
        console.log("response", response.data);
        let $ = cheerio.load(response.data);
        $(".site-content").each((index, element) => {
          let url = ArInput;
          let title = $(element).find(".entry-title").text();
          let body = $(element).find(".entry-content").text();

          console.log("TheCheapInvestor URL:", url);
          console.log("TheCheapInvestor title:", title);
          console.log("TheCheapInvestor body:", body);
        });
      })
      .catch((error) => console.log("error", error));
    // } else if (theUrl.includes("weeklyinvestoralerts")) {
    //   axios
    //     .get(theUrl, theHeaders)
    //     .then((response) => {
    //       console.log("response", response.data);
    //       let $ = cheerio.load(response.data);
    //       $(".site-content").each((index, element) => {
    //         let url = ArInput;
    //         let title = $(element).find(".page-title").text();
    //         let body = $(element).find(".content-area").text();

    //         console.log("TheCheapInvestor URL:", url);
    //         console.log("TheCheapInvestor title:", title);
    //         console.log("TheCheapInvestor body:", body);
    //       });
    //     })
    //     .catch((error) => console.log("error", error));
  }
};
