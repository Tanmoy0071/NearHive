import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-start py-8 px-4 sm:px-6 lg:px-8">
        <div className=" shadow-md rounded-lg max-w-3xl w-full p-6 sm:p-8">
          <h1 className="text-[#F1B729] font-mine text-3xl sm:text-4xl font-bold mb-2">Contact Us</h1>
          <p className=" mb-6">
            You may contact us using the information below:
            <br /> <br />
            Merchant Legal entity name:{" "}
            <b>TNENNT TECHNOLOGIES PRIVATE LIMITED</b> <br />
            Registered Address:{" "}
            <b>
              Silchar Road Ghat Line, Karimganj, Karimganj, Assam, PIN: 788710
            </b>
            <br />
            Operational Address:{" "}
            <b>
              Silchar Road Ghat Line, Karimganj, Karimganj, Assam, PIN: 788710
            </b>
            <br />
            Telephone No: <b>9395593877</b>
            <br />
            E-Mail ID:{" "}
            <b>
              <a href="mailto:support@nearhive.in">support@nearhive.in</a>
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contactus;
