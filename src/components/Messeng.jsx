import { useState } from "react";
import arrow from "../img/arrow.png";

function Messeng() {
  const [messeng, setMesseng] = useState([
    {
      id: 1,
      text: "Привет",
      author: "Admin",
      side: "right",
    },
    {
      id: 2,
      text: "Привет",
      author: "User",
      side: "left",
    },
    {
      id: 3,
      text: "Как дела?",
      author: "Admin",
      side: "right",
    },
    {
      id: 4,
      text: "Отлично, как у тебя?",
      author: "User",
      side: "left",
    },
    {
      id: 5,
      text: "Шикарно",
      author: "Admin",
      side: "right",
    },
  ]);

  const hendlerLeftSide = (id) => {
    setMesseng((prevMesseg) => {
      return prevMesseg.map((msg) => {
        if (msg.id === id) {
          return {
            ...msg,
            side: msg.side === "left" ? "right" : "left",
          };
        }
        return msg;
      });
    });
  };

  const hendlerRight = (id) => {
    setMesseng((prevMessege) => {
      return prevMessege.map((msge) => {
        if (msge.id === id) {
          return {
            ...msge,
            side: msge.side === "right" ? "left" : "right",
          };
        }
        return msge;
      });
    });
  };

  const handlerRemove = (id) => {
    setMesseng(
      messeng.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div>
      {messeng.map((item) => {
        return (
          <div
            className={`row ${
              item.side === "right" ? "justify-content-end" : ""
            }`}
          >
            <div className='col-5'>
              <div
                className={`inbox p-2 rounded-3 m-2 text-white' ${
                  item.side === "right" ? "bg-success" : "bg-primary"
                } `}
              >
                <div>{item.text}</div>
                <div>{item.author}</div>
                <button
                  className='btn btn-danger'
                  onClick={() => handlerRemove(item.id)}
                >
                  X
                </button>

                <img
                  src={arrow}
                  alt=''
                  className='left'
                  onClick={() => hendlerLeftSide(item.id)}
                />

                <img
                  src={arrow}
                  alt=''
                  className='right'
                  onClick={() => hendlerRight(item.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Messeng;
