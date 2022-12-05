import cardStyle from "./Card.module.css";
import userLogo from "../assets/Bitmap.svg";
import twitter from "../assets/icon-twitter.svg";
import location from "../assets/icon-location.svg";
import company from "../assets/icon-company.svg";
import website from "../assets/icon-website.svg";
import Stats from "./Stats";
import Contacts from "./Contacts";

function Card(props) {
  console.log(props.data);
  return (
    <div
      id={`${props.theme === "light" ? cardStyle.dark : cardStyle.light}`}
      className={cardStyle.card}
    >
      <div className={cardStyle.container}>
        <div className={cardStyle.mainInfo}>
          <img className={cardStyle.logo} src={props?.data?.avatar_url} />
          <div className={cardStyle.bio}>
            <div className={cardStyle.rowFirst}>
              <h1 className={cardStyle.userName}>{props?.data?.name}</h1>
              {props.onBtn === null ? (
                <p className={cardStyle.joinDate}>Joined 25-01-2011</p>
              ) : (
                <p className={cardStyle.joinDate}>
                  Joined&nbsp;
                  {props?.data?.created_at === null
                    ? "Joined-25-01-2011"
                    : props?.data?.created_at.substring(0, 10)}
                </p>
              )}
            </div>
            <a className={cardStyle.userTag}>
              @{props.onBtn === null ? "octocat" : props.login}
            </a>
            <p className={cardStyle.userBio} id={cardStyle.bioDesktop}>
              {props?.data?.bio === null
                ? "This profile has no bio"
                : props?.data?.bio}
            </p>
          </div>
        </div>
        <div className={cardStyle.info}>
          <p className={cardStyle.userBio} id={cardStyle.bioResponsive}>
            {props?.data?.bio === null
              ? "This profile has no bio"
              : props?.data?.bio}
          </p>
          <div className={cardStyle.stats}>
            <Stats
              Txt={"Repos"}
              valueNum={props?.data?.public_repos}
              theme={props.theme}
            />
            <Stats
              Txt={"Followers"}
              valueNum={props?.data?.followers}
              theme={props.theme}
            />
            <Stats
              Txt={"Following"}
              valueNum={props?.data?.following}
              theme={props.theme}
            />
          </div>
          <div className={cardStyle.contact}>
            <Contacts
              txt={
                props?.data?.location === null
                  ? "Not Available"
                  : props?.data?.location
              }
              img={location}
              theme={props.theme}
            />
            <Contacts
              txt={
                props?.data?.twitter_username === null
                  ? "Not Available"
                  : props?.data?.twitter_username
              }
              img={twitter}
              theme={props.theme}
            />
            <Contacts
              txt={
                props?.data?.email === null
                  ? "Not Available"
                  : props?.data?.email
              }
              img={website}
              theme={props.theme}
            />
            <Contacts
              txt={
                props?.data?.company === null
                  ? "Not Available"
                  : props?.data?.company
              }
              img={company}
              theme={props.theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
