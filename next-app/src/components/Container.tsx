import React from "react";
import ContactList from "./ContactList";

const Container = ({ data }: any) => {
  return (
    <div className="my-10 mx-10 py-5 px-5 border-blue-200">
      <div>
        <div>
          <ContactList list={data} />
        </div>
      </div>
    </div>
  );
};

export default Container;
