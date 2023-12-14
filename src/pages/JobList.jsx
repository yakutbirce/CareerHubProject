import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, setError } from "../redux/jobSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../components/Filter";

const JobList = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3050/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((error) => dispatch(setError(error)));
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="list-page">
      <Filter />
      <h3 className="job-count">
        Bulunan ({state.mainJobs.length}) iş arasından {state.jobs.length}{" "}
        tanesini görüntülüyorsunuz.
      </h3>

      <section className="jon-list">
        {!state.initialized && <p>Yükleniyor...</p>}
        {state.initialized && !state.isError ? (
          state.jobs.map((job) => (
            <div key={job.id}>
              <Card job={job} />
            </div>
          ))
        ) : (
          <p>Üzgünüz bir hata oluştu</p>
        )}
      </section>

      {selectedJob && <Modal job={selectedJob} closeModal={closeModal} />}

      <ToastContainer />
    </div>
  );
};

export default JobList;
