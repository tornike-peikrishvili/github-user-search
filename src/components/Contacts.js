import contactStyle from "./Contacts.module.css";

function Contacts(props) {
  return (
    <div
      id={`${props.theme === "light" ? contactStyle.dark : contactStyle.light}`}
      className={contactStyle.contactItem}
    >
      <img className={contactStyle.contactImg} src={props.img} />
      <a className={contactStyle.contactTxt}>{props.txt}</a>
    </div>
  );
}

export default Contacts;
