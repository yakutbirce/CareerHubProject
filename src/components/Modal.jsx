import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editJob } from "../redux/jobSlice";

const Modal = ({ job, closeModal }) => {
  const dispatch = useDispatch();
  const [editedJob, setEditedJob] = useState({ ...job });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleSave = () => {
    dispatch(editJob(editedJob));
    closeModal(); // Modal'ı kapat
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Bilgileri Düzenle</h2>
        <label>
          Pozisyon:
          <input
            className="input-style"
            type="text"
            name="position"
            value={editedJob.position}
            onChange={handleChange}
          />
        </label>
        <label>
          Şirket:
          <input
            className="input-style"
            type="text"
            name="company"
            value={editedJob.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Lokasyon:
          <input
            className="input-style"
            type="text"
            name="location"
            value={editedJob.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Durum:
          <input
            className="input-style"
            type="text"
            name="status"
            value={editedJob.status}
            onChange={handleChange}
          />
        </label>
        <label>
          Tür:
          <input
            className="input-style"
            type="text"
            name="type"
            value={editedJob.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Tarih:
          <input
            className="input-style"
            type="date"
            name="date"
            value={editedJob.date}
            onChange={handleChange}
          />
        </label>
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>
            Kaydet
          </button>
          <button className="cancel-button" onClick={closeModal}>
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
