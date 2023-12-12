import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setError } from "../redux/jobSlice";
import "react-toastify/dist/ReactToastify.css";
const JobList = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3050/jobs")
      .then(
        (
          res //console.log(res.data)//
        ) => dispatch(setJobs(res.data))
      )
      .catch((error) => dispatch(setError(error)));
  }, []);

  // console.log(state);

  return (
    <div className="list-page">
      <h3 className="job-count">
        Bulunan (16) iş arasından (16) tanesini görüntülüyorsunuz.
      </h3>

      <section className="jon-list">
        {/*Eğerki API den cevab bekleniyorsa*/}
        {!state.initialized && <p>Yükleniyor...</p>}
        {state.initialized && !state.isError ? (
          state.jobs.map((job) => {
            return <Card key={job.id} job={job} />;
          })
        ) : (
          <p>Üzgünüz bir hata oluştu</p>
        )}
      </section>
      <ToastContainer />
    </div>
  );
};

export default JobList;
