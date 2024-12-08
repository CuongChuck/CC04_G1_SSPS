import React, { useState } from "react";
import "./PaperManager.css";

// Component to manage paper types
const PaperManager = () => {
  const [papers, setPapers] = useState([
    { id: 1, name: "A4", sheets: 100, price: 500 },
    { id: 2, name: "A5", sheets: 200, price: 300 },
    { id: 3, name: "Legal", sheets: 150, price: 700 },
  ]);

  const [newPaper, setNewPaper] = useState({ name: "", sheets: "", price: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input changes for the add/edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPaper({ ...newPaper, [name]: value });
  };

  // Add new paper type
  const handleAddPaper = () => {
    if (!newPaper.name || !newPaper.sheets || !newPaper.price) return;
    const newPaperData = {
      id: Date.now(),
      name: newPaper.name,
      sheets: parseInt(newPaper.sheets, 10),
      price: parseFloat(newPaper.price),
    };
    setPapers([...papers, newPaperData]);
    setNewPaper({ name: "", sheets: "", price: "" });
  };

  // Delete a paper type
  const handleDeletePaper = (id) => {
    setPapers(papers.filter((paper) => paper.id !== id));
  };

  // Start editing a paper type
  const handleEdit = (index) => {
    const paperToEdit = papers[index];
    setNewPaper({
      name: paperToEdit.name,
      sheets: paperToEdit.sheets,
      price: paperToEdit.price,
    });
    setEditingIndex(index);
  };

  // Save the edited paper type
  const handleSaveEdit = () => {
    const updatedPapers = [...papers];
    updatedPapers[editingIndex] = {
      ...updatedPapers[editingIndex],
      name: newPaper.name,
      sheets: parseInt(newPaper.sheets, 10),
      price: parseFloat(newPaper.price),
    };
    setPapers(updatedPapers);
    setEditingIndex(null);
    setNewPaper({ name: "", sheets: "", price: "" });
  };

  return (
    <div className="container">
      <h1>Paper Management System</h1>

      {/* List of Paper Types */}
      <div className="list-container">
        <h2>Paper Types</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sheets in Storage</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, index) => (
              <tr key={paper.id}>
                <td>{paper.name}</td>
                <td>{paper.sheets}</td>
                <td>{paper.price}đ</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDeletePaper(paper.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Paper Form */}
      <div className="form-container">
        <h2>{editingIndex !== null ? "Edit Paper" : "Add New Paper"}</h2>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Paper Name"
            value={newPaper.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="sheets"
            placeholder="Number of Sheets"
            value={newPaper.sheets}
            onChange={handleInputChange}
          />
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            value={newPaper.price}
            onChange={handleInputChange}
          />
          {editingIndex !== null ? (
            <div>
              <button onClick={handleSaveEdit}>Save Changes</button>
              <button
                onClick={() => {
                  setEditingIndex(null);
                  setNewPaper({ name: "", sheets: "", price: "" });
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button onClick={handleAddPaper}>Add Paper</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperManager;
