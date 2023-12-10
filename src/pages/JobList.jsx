import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const JobList = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3050/jobs")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <section className="jon-list">
        <Card />
      </section>
    </div>
  );
};

export default JobList;
