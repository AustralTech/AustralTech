import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSpecialities, deleteSpeciality, updateSpeciality, createSpeciality } from '../../redux/SpecialitiesSlice';

const SpecialtiesComponent = () => {
  const dispatch = useDispatch();
  const { specialities, status, error } = useSelector((state) => state.specialties);

  const [editingSpeciality, setEditingSpeciality] = useState(null);
  const [newSpeciality, setNewSpeciality] = useState({ name: '', description: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllSpecialities());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSpeciality(id));
  };

  const handleEdit = (speciality) => {
    setEditingSpeciality(speciality);
  };

  const handleSave = () => {
    if (editingSpeciality) {
      dispatch(updateSpeciality({ id: editingSpeciality.id, specialityData: editingSpeciality }));
      setEditingSpeciality(null);
    } else {
      dispatch(createSpeciality(newSpeciality));
      setNewSpeciality({ name: '', description: '' });
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  } else if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Specialties</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={editingSpeciality ? editingSpeciality.name : newSpeciality.name}
          onChange={(e) =>
            editingSpeciality
              ? setEditingSpeciality({ ...editingSpeciality, name: e.target.value })
              : setNewSpeciality({ ...newSpeciality, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={editingSpeciality ? editingSpeciality.description : newSpeciality.description}
          onChange={(e) =>
            editingSpeciality
              ? setEditingSpeciality({ ...editingSpeciality, description: e.target.value })
              : setNewSpeciality({ ...newSpeciality, description: e.target.value })
          }
        />
        <button onClick={handleSave}>{editingSpeciality ? 'Save Changes' : 'Add Speciality'}</button>
        {editingSpeciality && <button onClick={() => setEditingSpeciality(null)}>Cancel</button>}
      </div>
      <div>
        {specialities.map((speciality) => (
          <div key={speciality.id}>
            <h3>{speciality.name}</h3>
            <p>{speciality.description}</p>
            <button onClick={() => handleEdit(speciality)}>Edit</button>
            <button onClick={() => handleDelete(speciality.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesComponent;
