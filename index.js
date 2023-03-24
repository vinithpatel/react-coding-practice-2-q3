const Box = (props) => {
  const { boxType, boxText } = props;
  return (
    <div className={`box ${boxType}`}>
      <h1 className="heading">{boxText}</h1>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="box-heading">Boxes</h1>
    <div className="box-container">
      <Box boxType="small-box" boxText="small" />
      <Box boxType="medium-box" boxText="Medium" />
      <Box boxType="large-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
