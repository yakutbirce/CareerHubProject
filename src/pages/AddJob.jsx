import React from "react";
import { v4 } from "uuid";
import { statusOption, typeOption } from "../helpers/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useFormik hook'unu kullanarak form yönetimini başlatma
  const formik = useFormik({
    // form içindeki alanların başlangıç değerleri
    initialValues: {
      position: "",
      company: "",
      location: "",
      status: "",
      type: "",
    },

    validationSchema: Yup.object({
      position: Yup.string().required("Pozisyon alanı zorunludur!"),
      company: Yup.string().required("Şirket alanı zorunludur!"),
      location: Yup.string().required("Lokasyon alanı zorunludur!"),
      status: Yup.string().required("Durum alanı zorunludur!"),
      type: Yup.string().required("Tür alanı zorunludur!"),
      date: Yup.string().required("Tarih alanı zorunludur!"),
    }),

    onSubmit: (values) => {
      console.log("Form submit işlemi başladı");
      console.log("Form değerleri:", values);
      // Form submit işlemi burada gerçekleşecek
      // values nesnesi, formun mevcut değerlerini içerir

      //Form Data Oluşturma
      const form = new FormData();
      form.append("position", values.position);
      form.append("company", values.company);
      form.append("location", values.location);
      form.append("status", values.status);
      form.append("type", values.type);
      form.append("date", values.date);

      //formdaki değerlerden bir obje oluşturma
      const newJob = Object.fromEntries(form.entries());
      if (!newJob.type || !newJob.status) {
        toast.info("tüm alanları doldurunuz");
        return;
      }
      // unique id ekleme
      newJob.id = v4();
      //tarih ekleme
      newJob.date = new Date().toLocaleDateString();

      axios
        .post("http://localhost:3050/jobs", newJob)
        .then(() => {
          //Yeni işi stora kaydetme
          dispatch(addJob(newJob));
          navigate("/");
          //Ekleme başarılı bildirimi
          toast.success("İş Başarıyla Eklendi");
        })
        .catch((error) => toast.error("Beklenmedik bir hata oluştu..."));
    },
  });

  return (
    <div className="add-sec">
      <h2>Yeni İş Ekle</h2>
      {/* formik.handleSubmit ile form submit işlemini yönetme */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="position">Pozisyon</label>
          {/* formik.handleChange ile değer değişikliklerini yakalama */}
          <input
            type="text"
            required
            name="position"
            id="position"
            onChange={formik.handleChange}
            value={formik.values.position}
          />
        </div>

        <div>
          <label htmlFor="company">Şirket</label>
          <input
            type="text"
            required
            name="company"
            id="company"
            onChange={formik.handleChange}
            value={formik.values.company}
          />
        </div>
        <div>
          <label htmlFor="location">Lokasyon</label>
          <input
            type="text"
            required
            name="location"
            id="location"
            onChange={formik.handleChange}
            value={formik.values.location}
          />
        </div>
        <div>
          <label htmlFor="date">Tarih</label>
          <input
            type="date"
            id="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </div>
        <div>
          <label htmlFor="status">Durum</label>
          <select
            name="status"
            id="status"
            onChange={formik.handleChange}
            value={formik.values.status}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {statusOption.map((status, i) => (
              <option key={i} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="type">Tür</label>
          <select
            name="type"
            id="type"
            onChange={formik.handleChange}
            value={formik.values.type}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {typeOption.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Ekle</button>
        </div>
        {/* Form hata mesajlarını gösterme */}
        {formik.errors && (
          <div style={{ color: "red" }}>
            {Object.values(formik.errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddJob;
