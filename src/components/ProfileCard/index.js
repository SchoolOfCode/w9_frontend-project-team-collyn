import React from 'react';
import './index.css';

export default function ProfileCard() {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src= "https://i.imgur.com/dC20Qqw.jpg"
          alt="SoC character"
        />
      </div>
      <h3>Rebecca Tufnell</h3>
      <p className="project-interest">Project interest: Games</p>
      <p className="project-type">Project Type: Survey</p>
      <p className="strength">Strength: Testing</p>
      <p className="availability">Availability: Flexible</p>
      <button>Collabor8</button>
      
    </div>
  );

}


// {export default function ProfileCard({ info }) {
//   return info.map((x) => (
//     <div className="card">
//       <div className="image-container">
//         <img
//           src={x.img}
//           alt="SoC character"
//         />
//       </div>
//         /* <h3>{x.name}</h3>
//       <p className="project-interest">Project interest: {x.project_interest}</p>
//       <p className="project-type">Project Type: {x.project_type}</p>
//       <p className="strength">Strength: {x.strength}</p>
//       <p className="availability">Availability: {x.availability}</p>
//       <button>Collabor8</button> */}

// "https://upload.wikimedia.org/wikipedia/en/8/8c/Cocktail_1988.jpg"