import "../style/suggestion.css";

export function Suggestion() {
  return (
    <div className="container-suggestion">
      <div className="header-suggestion">
        <img
          alt="profile-pic"
          src={`https://www.personality-database.com/profile_images/23415.png`}
        />

        <div className="user-infos-suggestion">
          <div className="infos">
            <span>@hantasero</span>
            <p>Sero Hanta</p>
          </div>

          <button className="switch">Switch</button>
        </div>
      </div>

      <div className="header-main-suggestion">
        <p>Suggestions for you</p>

        <span>See All</span>
      </div>

      <div className="user-suggestion">
        <div className="infos-suggestion">
          <img
            alt="profile-pic"
            src="http://pm1.narvii.com/6425/4f61ffbfabf2a36b762356412c183b3036d4093d_00.jpg"
          ></img>

          <div className="info-suggestion">
            <p>Followed by Ochako</p>
          </div>

          <button className="follow">Follow</button>
        </div>
        <div className="infos-suggestion">
          <img
            alt="profile-pic"
            src="http://pm1.narvii.com/6425/4f61ffbfabf2a36b762356412c183b3036d4093d_00.jpg"
          ></img>

          <div className="info-suggestion">
            <p>Followed by Ochako</p>
          </div>

          <button className="follow">Follow</button>
        </div>
        <div className="infos-suggestion">
          <img
            alt="profile-pic"
            src="http://pm1.narvii.com/6425/4f61ffbfabf2a36b762356412c183b3036d4093d_00.jpg"
          ></img>

          <div className="info-suggestion">
            <p>Followed by Ochako</p>
          </div>

          <button className="follow">Follow</button>
        </div>
        <div className="infos-suggestion">
          <img
            alt="profile-pic"
            src="http://pm1.narvii.com/6425/4f61ffbfabf2a36b762356412c183b3036d4093d_00.jpg"
          ></img>

          <div className="info-suggestion">
            <p>Followed by Ochako</p>
          </div>

          <button className="follow">Follow</button>
        </div>
      </div>
    </div>
  );
}
