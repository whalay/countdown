// import { useSelector, useDispatch } from 'react-redux';

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    date: "",
    reason: ""
  });
  // console.log(value);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  //call api for Creating Event

//   const [nameInput, setNameInput] = useState('');
//   const [dateInput, setDateInput] = useState('');


//   const nameHandler = (e) => {
// setNameInput(e.target.value);
//   }

//   const dateHandler = (e) => {
//     setDateInput(e.target.value);
//   }

  const handleSubmit = (e) => {
    e.preventDefault();
    // createEvents(value);
    const createEvents = async () => {
      try {
        setIsLoading(true);
        let newDate = new Date(value.date).toLocaleDateString("us-EN", options);
        console.log(newDate);

        const request = await axios.post(
          "https://counter-3m98.onrender.com/api/v1/countdown/",
          {
            eventName: value.name.toLowerCase(),
            eventDescription: value.reason,
            eventDate: newDate
          }
        );
        if (request?.data?.success) {
          let formatName = value.name.toLowerCase();
          console.log(request);
          setIsLoading(false);
          navigate(`/${formatName}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    createEvents();


    setValue

  };
  // const handleClose = () => {
  //   document.body.style.overflowY = "scroll";
  // };

  return (
    <div className={`modal__container ${open === false ? "closeModal" : ""}`}>
      <div
        className={`backdrop ${open === false ? "closeModal" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`modal ${open === false ? "closeModal" : ""}`}>
        <div className="top__modal ">
          <h4>Add New Event</h4>
        </div>
        <div className="bottom__modal ">
          <form noValidate onSubmit={handleSubmit} className="flex">
            <div className="event__name flex">
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Christmas"

                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}


                id="name"
                title="name"
                required
                type="text"
              />
            </div>

            <div className="event__reason flex">
              <label htmlFor="date">Reason:</label>
              <textarea
                placeholder="Jesus is born..."
                value={value.reason}
                onChange={(e) => setValue({ ...value, reason: e.target.value })}
                id="reason"
                title="reason"
                required
              />
            </div>
            <div className="event__date flex">
              <label htmlFor="date">Date:</label>
              <input

                placeholder="Christmas"
                value={value.date}
                onChange={(e) =>
                  setValue({
                    ...value,
                    date: e.target.value
                  })
                }

                id="date"
                title="date"
                required
                type="date"
              />
            </div>
            <button
              className={`button submit__button ${isLoading ? "disable" : ""}`}
            >
              {isLoading ? "Loading..." : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
