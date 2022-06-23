import React, { useState } from 'react';

function Suggestions() {
  // const [input, setInput] = useState('');

  // const handleChange = (event) => {
  //   setInput(event.target.value);
  //   console.log('value is:', event.target.value);
  // };
  const initialContact = {
    name: '',
    project_interest: '',
    project_type: '',
    strength: '',
    availablity: '',
  };
  const [contact, setContact] = useState(initialContact);

  const handleChangeFor = (propertyName) => (event) => {
    setContact((contact) => ({
      ...contact,
      [propertyName]: event.target.value,
    }));
    console.log(contact.name);
  };

  async function sendInput(contact) {
    try {
      const data = await fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          project_interest: contact.project_interest,
          project_type: contact.project_type,
          strength: contact.strength,
          availability: contact.availability,
          img: '',
        }),
      });
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="suggestions-box">
      <h3 id="suggestions-intro">
        Can't find a project you're interested in? Suggest one below!
      </h3>
      <form>
        <div className="suggestions-input">
          <label value="name">Your name</label>
          <input
            value={contact.name}
            onChange={handleChangeFor('name')}
            type="text"
          ></input>
        </div>
        <div className="suggestions-input">
          <label value="email">Your email</label>
          <input type="text"></input>
        </div>
        <div className="suggestions-input">
          <label value="project_interest">Project Interest</label>
          <input
            value={contact.project_interest}
            onChange={handleChangeFor('project_interest')}
            type="text"
          ></input>
        </div>
        <div className="suggestions-input">
          <label value="name">Project Type</label>
          <input
            value={contact.project_type}
            onChange={handleChangeFor('project_type')}
            type="text"
          ></input>
        </div>
        <div className="suggestions-input">
          <label value="name">Availablity</label>
          <input
            value={contact.availability}
            onChange={handleChangeFor('availability')}
            type="text"
          ></input>
        </div>
        <div className="suggestions-input">
          <label value="name">Strength</label>
          <input
            value={contact.strength}
            onChange={handleChangeFor('strength')}
            type="text"
          ></input>
        </div>
      </form>
      <button className="suggestions-button" onClick={() => sendInput(contact)}>
        Send suggestion
      </button>
    </div>
  );
}

export default Suggestions;
