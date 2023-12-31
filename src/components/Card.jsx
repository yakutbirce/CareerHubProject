import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteJob } from "../redux/jobSlice";
import Modal from "./Modal";

const Card = ({ job }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const { id, position, company, location, status, type, date } = job;

  const getClassName = () => {
    switch (job.status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddedildi":
        return "rejected";
      case "Mülakat":
        return "interview";
      default:
        return "default";
    }
  };

  const spanColor = {
    backgroundColor:
      status === "Mülakat"
        ? "green"
        : status === "Reddedildi"
        ? "red"
        : status === "Devam Ediyor"
        ? "orange"
        : null,
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Bu işi silmek istediğinizden emin misiniz?"
    );
    if (isConfirmed) {
      dispatch(deleteJob(id));
    }
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const toggleDetail = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  return (
    <div className="card">
      <div className="head">
        <div className="letter">
          <p>{company[0]}</p>
        </div>

        <div className="info">
          <p>{position}</p>
          <p>{company}</p>
        </div>
      </div>

      {isDetailOpen ? (
        <div className="body">
          <div className="field">
            <img src="/images/bag.png" alt="" />
            <p>{location}</p>
          </div>
          <div className="field">
            <img src="/images/bag.png" alt="" />
            <p>{type}</p>
          </div>
          <div className="field">
            <img src="/images/bag.png" alt="" />
            <p>{date}</p>
          </div>
          <div className="status">
            <span style={spanColor}>{status}</span>
          </div>
        </div>
      ) : null}

      <div className="button-container">
        <button className="delete-button" onClick={handleDelete}>
          Sil
        </button>
        <button className="edit-button" onClick={handleEdit}>
          Düzenle
        </button>
        <button className="detail-button" onClick={toggleDetail}>
          Detay
        </button>
      </div>

      {isModalOpen && (
        <Modal job={job} closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Card;
