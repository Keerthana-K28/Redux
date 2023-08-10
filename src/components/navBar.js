import React from "react";
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {tasksList} = useSelector((state) => state.tasks)

  return (
    <>
      <h1 className="text-center my-4 text-primary">Crud Operation using react-redux</h1>
    </>
  );
};

export default Navbar;