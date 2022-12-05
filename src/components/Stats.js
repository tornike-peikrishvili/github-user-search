import statsStyle from "./Stats.module.css";

function Stats(props) {
  return (
    <div
      id={`${props.theme === "light" ? statsStyle.dark : statsStyle.light}`}
      className={statsStyle.statsItem}
    >
      <p className={statsStyle.itemTxt}>{props.Txt}</p>
      <p className={statsStyle.itemValue}>{props.valueNum}</p>
    </div>
  );
}

export default Stats;
