import React from "react";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import { useSelector } from "react-redux";
import { fetchData } from "../redux/slice";
import SubmitForm from "../components/SubmitForm";

const Home = () => {
  const store = useSelector((store) => store.data);
  // console.log(store.data);

  return (
    <div>
      <Banner />

      {/* form */}
      <SubmitForm fetchData={fetchData} />

      <Grid store={store} />
    </div>
  );
};

export default Home;
