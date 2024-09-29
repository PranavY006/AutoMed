import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    position: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8081/update/${id}`, values)
      .then((res) => navigate('/'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8081/getrecord/${id}`)
      .then((res) =>
        setValues({
          name: res.data[0].name,
          position: res.data[0].position,
          email: res.data[0].email,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Update User</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position:
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="Enter position"
            name="position"
            value={values.position}
            onChange={(e) => setValues({ ...values, position: e.target.value })}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
