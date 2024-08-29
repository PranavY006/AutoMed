import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Inline styles for ShadCN UI components
const styles = {
  button: {
    primary: {
      backgroundColor: '#1d4ed8',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    secondary: {
      backgroundColor: '#4b5563',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '8px',
    },
    small: {
      fontSize: '12px',
      padding: '6px 12px',
    },
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    backgroundColor: '#f3f4f6',
  },
  tableCell: {
    padding: '8px 16px',
    borderBottom: '1px solid #e5e7eb',
    textAlign: 'left',
  },
  tableRow: {
    '&:nth-child(even)': {
      backgroundColor: '#f9fafb',
    },
  },
};

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/user')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/delete/${id}`)
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };

  return (
    <div className='container mt-5 '>
      <Link to="/create" style={styles.button.primary}>
        CREATE USER
      </Link>
      <br></br>
      <br></br>
      {users.length !== 0 ? (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr style={styles.tableRow}>
              <th style={styles.tableCell}>#</th>
              <th style={styles.tableCell}>Name</th>
              <th style={styles.tableCell}>Position</th>
              <th style={styles.tableCell}>Email</th>
              <th style={styles.tableCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{user.id}</td>
                <td style={styles.tableCell}>{user.name}</td>
                <td style={styles.tableCell}>{user.position}</td>
                <td style={styles.tableCell}>{user.email}</td>
                <td style={styles.tableCell}>
                  <Link to={`/update/${user.id}`} style={{ ...styles.button.secondary, ...styles.button.small }}>
                    UPDATE
                  </Link>
                  <button
                    type='button'
                    style={{ ...styles.button.primary, ...styles.button.small }}
                    onClick={() => handleDelete(user.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>NO RECORDS</h2>
      )}
    </div>
  );
}

export default User;
