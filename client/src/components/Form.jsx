import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../styles/form.css";

const Form = ({ isMobile, eventDetails }) => {
  const [isTeam, setIsTeam] = useState(eventDetails.team);
  const [participant, setParticipant] = useState({
    name: "",
    email: "",
    rollno: "",
    phone_no: null,
    college: "",
  });
  const [isMember, setIsMember] = useState(2);
  const [teamName, setTeamName] = useState("");

  const [member1, setMember1] = useState({
    mem1_Name: "",
    mem1_email: "",
    mem1_Contact: null,
    mem1_college: "",
  });
  const [member2, setMember2] = useState({
    mem2_Name: "",
    mem2_email: "",
    mem2_Contact: null,
    mem2_college: "",
  });
  const [member3, setMember3] = useState({
    mem3_Name: "",
    mem3_email: "",
    mem3_Contact: null,
    mem3_college: "",
  });

  const navigate = useNavigate();

  const memberType = [
    { id: 2, value: "2" },
    { id: 3, value: "3" },
  ];

  const onChange = (e) => {
    const element = e.target.value;
    if (element == 3) {
      setIsMember(3);
    } else {
      setIsMember(2);
    }
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();

    if (isTeam) {
      console.log({
        eventName: eventDetails.eventName,
        teamName: teamName,
        ...member1,
        ...member2,
        ...member3,
      });
      axios
        .post("/team", {
          eventName: eventDetails.eventName,
          teamName: teamName,
          ...member1,
          ...member2,
          ...member3,
        })
        .then((res) => {
          toast.success("Registration complete for " + eventDetails.eventName, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTeamName("");
          setMember1({
            mem1_Name: "",
            mem1_email: "",
            mem1_Contact: null,
            mem1_college: "",
          });

          setMember2({
            mem2_Name: "",
            mem2_email: "",
            mem2_Contact: null,
            mem2_college: "",
          });

          setMember3({
            mem3_Name: "",
            mem3_email: "",
            mem3_Contact: null,
            mem3_college: "",
          });
        })
        .catch((err) => {
          toast.error("Invalid entry please try again...")
          console.log(err.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...participant });
    if (!isTeam) {
      axios
        .post("/singleParticipant", {
          ...participant,
          eventName: eventDetails.eventName,
        })
        .then((res) => {
          toast.success("Registration complete for " + eventDetails.eventName, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setParticipant({
            name: "",
            email: "",
            rollno: "",
            phone_no: null,
            college: "",
          });
        })
        .catch((err) => {
          toast.error("Invalid entry please try again...")
          console.log(err.message);
        });
    }
  };

  // individual participant
  const handleNameChange = (e) => {
    setParticipant({
      ...participant,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setParticipant({
      ...participant,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setParticipant({
      ...participant,
      phone_no: e.target.value,
    });
  };

  const handleRollnoChange = (e) => {
    setParticipant({
      ...participant,
      rollno: e.target.value,
    });
  };

  const handleCollegeChange = (e) => {
    setParticipant({
      ...participant,
      college: e.target.value,
    });
  };

  //team participants
  // member1
  const handleMem1Name = (e) => {
    setMember1({
      ...member1,
      mem1_Name: e.target.value,
    });
  };

  const handleMem1Email = (e) => {
    setMember1({
      ...member1,
      mem1_email: e.target.value,
    });
  };

  const handleMem1Contact = (e) => {
    setMember1({
      ...member1,
      mem1_Contact: e.target.value,
    });
  };

  const handleMem1College = (e) => {
    setMember1({
      ...member1,
      mem1_college: e.target.value,
    });
  };

  //member2
  const handleMem2Name = (e) => {
    setMember2({
      ...member2,
      mem2_Name: e.target.value,
    });
  };

  const handleMem2Email = (e) => {
    setMember2({
      ...member2,
      mem2_email: e.target.value,
    });
  };

  const handleMem2Contact = (e) => {
    setMember2({
      ...member2,
      mem2_Contact: e.target.value,
    });
  };

  const handleMem2College = (e) => {
    setMember2({
      ...member2,
      mem2_college: e.target.value,
    });
  };

  // member 3
  const handleMem3Name = (e) => {
    setMember3({
      ...member3,
      Mem3_Name: e.target.value,
    });
  };

  const handleMem3Email = (e) => {
    setMember3({
      ...member3,
      Mem3_email: e.target.value,
    });
  };

  const handleMem3Contact = (e) => {
    setMember3({
      ...member3,
      Mem3_Contact: e.target.value,
    });
  };

  const handleMem3College = (e) => {
    setMember3({
      ...member3,
      Mem3_college: e.target.value,
    });
  };

  return (
    <div className="d-flex row justify-content-between h-auto">
      <div className={`${isMobile ? "col-12" : "col-6"} px-5 mt-5`}>
        {isTeam === false && (
          <form
            onSubmit={handleSubmit}
            className="d-flex row justify-content-center"
          >
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="eventName"
              value={eventDetails.eventName}
              disabled
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="name"
              placeholder="Name:"
              onChange={handleNameChange}
            />
            <input
              type="email"
              className="w-100 form-input pl-3 mt-4"
              id="email"
              placeholder="Email:"
              onChange={handleEmailChange}
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="roll_no"
              placeholder="Roll no.:"
              onChange={handleRollnoChange}
            />
            <input
              type="phone"
              className="w-100 form-input pl-3 mt-4"
              id="phone_no"
              placeholder="Phone no.:"
              onChange={handlePhoneChange}
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="college"
              placeholder="College:"
              onChange={handleCollegeChange}
            />
            <button className="btn form-btn mt-5" type="submit">
              Submit
            </button>
          </form>
        )}
        {isTeam === true && (
          <form
            onSubmit={handleTeamSubmit}
            className="d-flex row justify-content-center"
          >
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="eventName"
              value={eventDetails.eventName}
              disabled
            />
            <input
              type="text"
              className="w-100 form-input pl-3 mt-4"
              id="name"
              placeholder="Team Name:"
              onChange={(e) => {
                setTeamName(e.target.value);
              }}
            />
            <select
              name="teamMember"
              id="teamMember"
              className="form-input w-100 mt-4 px-3"
              onChange={(e) => onChange(e)}
            >
              <option className="bg-black" value="" disabled>
                Select number of Members
              </option>
              {memberType.map((index) => {
                return (
                  <option
                    value={index.id}
                    className="bg-black p-3"
                    key={index.id + index.value}
                  >
                    {index.value}
                  </option>
                );
              })}
            </select>
            {isMember > 0 && (
              <>
                <label htmlFor="member1" className="fs-14 mt-5 mb-2">
                  Member 1
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="mem1_name"
                  placeholder="Name:"
                  onChange={handleMem1Name}
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem1_email"
                  placeholder="Email:"
                  onChange={handleMem1Email}
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem1_phone_no"
                  placeholder="Phone no.:"
                  onChange={handleMem1Contact}
                />
                <input
                  type="text"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem1_college"
                  placeholder="College:"
                  onChange={handleMem1College}
                />
              </>
            )}
            {isMember > 1 && (
              <>
                <label htmlFor="member2" className="fs-14 mt-5 mb-2">
                  Member 2
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="mem2_name"
                  placeholder="Name:"
                  onChange={handleMem2Name}
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem2_email"
                  placeholder="Email:"
                  onChange={handleMem2Email}
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem2_phone_no"
                  placeholder="Phone no.:"
                  onChange={handleMem2Contact}
                />
                <input
                  type="text"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem2_college"
                  placeholder="College:"
                  onChange={handleMem2College}
                />
              </>
            )}
            {isMember > 2 && (
              <>
                <label htmlFor="member3" className="fs-14 mt-5 mb-2">
                  Member 3
                </label>
                <input
                  type="text"
                  className="w-100 form-input pl-3"
                  id="mem3_name"
                  placeholder="Name:"
                  onChange={handleMem3Name}
                />
                <input
                  type="email"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem3_email"
                  placeholder="Email:"
                  onChange={handleMem3Email}
                />
                <input
                  type="phone"
                  className="w-100 form-input pl-3 mt-4"
                  id="mem3_phone_no"
                  placeholder="Phone no.:"
                  onChange={handleMem3Contact}
                />
                <input
                  type="text"
                  className="w-100 form-input pl-3 mt-4"
                  id="me31_college"
                  placeholder="College:"
                  onChange={handleMem3College}
                />
              </>
            )}

            <button className="btn form-btn mt-5" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
      {!isMobile && (
        <img
          src="/assets/images/form.png"
          className="col-6 position-absolute"
          style={{ right: "0", top: "200px" }}
          alt="form_IMG"
        />
      )}
      
    </div>
  );
};

export default Form;
