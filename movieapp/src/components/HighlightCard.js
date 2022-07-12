export default function HighlightCard(props) {
    console.log("props is: ", props);
    return (
      <div className="HighlightCard">
        <div>{props.header}</div>
        <div>Description</div>
      </div>
    );
  }