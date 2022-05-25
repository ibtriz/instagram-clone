import { Fragment } from "react";
import "../style/layout.css";
import { Post } from "./post";
import { Story } from "./story";
import { Suggestion } from "./suggestion";

export function Layout() {
  return (
    <Fragment>
      <div className="main-grid">
        <div className="firstColumn" style={{ gridArea: "firstColumn" }}>
          <div className="box">
            <Story/>
          </div>
          <div className="box">
            <Post/>
          </div>
        </div>

        <div style={{ gridArea: "secondColumn" }}>
          <div className="suggestion-box">
            <Suggestion/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
