import "../style/post.css";

import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Fragment } from "react";

export function Post() {
  return (
    <Fragment>
        <div className="profile">
      <header className="header-post">
        <div className="infos-post">
          <img
            className="img-header-post"
            alt="kaminari-profile"
            src="https://ovicio.com.br/wp-content/uploads/2021/03/20210306-780be973a5321183345c8ab58c014ab8-555x555.jpg"
          />

          <p>Kaminari</p>
        </div>

        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img
          src="https://c.tenor.com/jmmmpaXAarYAAAAC/kaminari-denki-denki.gif"
          alt="kaminari-post"
        />
      </div>

      <div className="footer-post">
        <IconContext.Provider value={{ size: "30px" }}>
          <section className="engagement-post">
            <div className="icons-1">
              <div className="icon">
                <IoMdHeartEmpty />
              </div>
              <div className="icon">
                <BsChat />
              </div>
              <div className="icon">
                <FiSend />
              </div>
            </div>

            <div className="icon">
              <BsBookmark />
            </div>
          </section>
        </IconContext.Provider>

        <section className="like">
          <span>Midoriya, Katsumi and other 2444 liked</span>
        </section>

        <div className="legend">
          <p>
            <span>Kaminari</span> ⚡⚡⚡
          </p>
        </div>

        <div className="time-post">
          <time>1 Hour</time>
        </div>

        <div className="comment">
          <div className="fake-comment">
            <IconContext.Provider value={{ size: "25px" }}>
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>

            <input placeholder="Comment..." />
          </div>

          <button>Publish</button>
        </div>
      </div>
      </div>
      <div className="profile">
      <header className="header-post">
        <div className="infos-post">
          <img
            className="img-header-post"
            alt="kiri-profile"
            src="https://pbs.twimg.com/profile_images/1347583964920344576/Q2i8TWeE_400x400.jpg"
          />

          <p>Kirishima</p>
        </div>

        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img
          src="https://static.wikia.nocookie.net/282baf16-dd5e-4a06-96bc-a3a1ebb67595/scale-to-width/755"
          alt="kiri-post"
        />
      </div>

      <div className="footer-post">
        <IconContext.Provider value={{ size: "30px" }}>
          <section className="engagement-post">
            <div className="icons-1">
              <div className="icon">
                <IoMdHeartEmpty />
              </div>
              <div className="icon">
                <BsChat />
              </div>
              <div className="icon">
                <FiSend />
              </div>
            </div>

            <div className="icon">
              <BsBookmark />
            </div>
          </section>
        </IconContext.Provider>

        <section className="like">
          <span>6113 likes</span>
        </section>

        <div className="legend">
          <p>
            <span>Kirishima</span>
          </p>
        </div>

        <div className="time-post">
          <time>2 Hours ago</time>
        </div>

        <div className="comment">
          <div className="fake-comment">
            <IconContext.Provider value={{ size: "25px" }}>
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />
          </div>

          <button>Publicar</button>
        </div>
      </div>
      </div>
      <div className="profile">
      <header className="header-post">
        <div className="infos-post">
          <img
            className="img-header-post"
            alt="Toga-profile"
            src="https://i.pinimg.com/736x/98/a8/d8/98a8d88c5ada17bc343001a9c14ee687.jpg"
          />

          <p>Himiko</p>
        </div>

        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img
          src="https://c.tenor.com/35gvSOZxetQAAAAC/toga-himiko-toga.gif"
          alt="toga-post"
        />
      </div>

      <div className="footer-post">
        <IconContext.Provider value={{ size: "30px" }}>
          <section className="engagement-post">
            <div className="icons-1">
              <div className="icon">
                <IoMdHeartEmpty />
              </div>
              <div className="icon">
                <BsChat />
              </div>
              <div className="icon">
                <FiSend />
              </div>
            </div>

            <div className="icon">
              <BsBookmark />
            </div>
          </section>
        </IconContext.Provider>

        <section className="like">
          <span>Dabi, Spinner and other 2222 liked</span>
        </section>

        <div className="legend">
          <p>
            <span>Himiko</span> yaaaaaaay
          </p>
        </div>

        <div className="time-post">
          <time>2 days ago</time>
        </div>

        <div className="comment">
          <div className="fake-comment">
            <IconContext.Provider value={{ size: "25px" }}>
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>

            <input placeholder="Comment..." />
          </div>

          <button>Publish</button>
        </div>
      </div>
      </div>
      <div className="profile">
      <header className="header-post">
        <div className="infos-post">
          <img
            className="img-header-post"
            alt="keigo-profile"
            src="https://i.pinimg.com/736x/fb/43/06/fb4306e479ff1523cec9707d22f46cf0.jpg"/>
          <p>Hawks</p>
        </div>

        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img
          src="https://i.pinimg.com/736x/4d/15/27/4d1527cab093960a93da137993f5c99b.jpg"alt="Keigo-post"
        />
      </div>

      <div className="footer-post">
        <IconContext.Provider value={{ size: "30px" }}>
          <section className="engagement-post">
            <div className="icons-1">
              <div className="icon">
                <IoMdHeartEmpty />
              </div>
              <div className="icon">
                <BsChat />
              </div>
              <div className="icon">
                <FiSend />
              </div>
            </div>

            <div className="icon">
              <BsBookmark />
            </div>
          </section>
        </IconContext.Provider>

        <section className="like">
          <span>3434434 likes</span>
        </section>

        <div className="legend">
          <p>
            <span>Hawks</span> 
          </p>
        </div>

        <div className="time-post">
          <time>3 hours ago</time>
        </div>

        <div className="comment">
          <div className="fake-comment">
            <IconContext.Provider value={{ size: "25px" }}>
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>

            <input placeholder="Comment..." />
          </div>

          <button>Publish</button>
        </div>
      </div>
      </div>
    </Fragment>
  );
}
