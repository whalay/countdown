import axios from "axios";
import { useState } from "react";
import clock from "../../assets/images/cl.png";
import alarm from "../../assets/images/clock.png";
import Modal from "../../components/modal/Modal";

import "./Home.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="home ">
      <h1>
        {" "}
        Welcom<span>e to Coun</span>tDown
      </h1>
      <h3> Where We help you countdown to special Events</h3>
      <button className="button add__button" onClick={() => setOpenModal(true)}>
        Create New Countdown +
      </button>

      <img className="clock" alt="clock" src={clock} />
      <img className="alarm" alt="clock" src={alarm} />
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};
export default Home;
