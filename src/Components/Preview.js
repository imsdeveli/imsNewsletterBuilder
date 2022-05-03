const Preview = (props) => {
  let htmlToRender = `${props.templateString}`;
  // console.log("htmltorender:", htmlToRender);
  return (
    <div className="Preview">
      <h2> Preview </h2>

      <div dangerouslySetInnerHTML={{ __html: htmlToRender }}></div>
    </div>
  );
};

export default Preview;
