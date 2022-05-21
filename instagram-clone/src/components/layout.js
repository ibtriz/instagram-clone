import { Fragment } from "react";
import "../style/layout.css";
import { Post } from "./post";
import { Story } from "./story";

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
            suggestion
          </div>
        </div>
      </div>
    </Fragment>
  );
}
