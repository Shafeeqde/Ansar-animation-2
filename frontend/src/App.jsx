// import React from 'react';
// import './App.css'; // Import your CSS file

// const App = () => {
//   const images = [
//     '/line 1.svg',
//     '/line 2.svg',
//     '/line 3.svg',
//     '/line 4.svg',
//     '/line 5.svg',
//     '/line 6.svg',
//     '/line 7.svg',
//     '/line 8.svg',
//   ];

//   return (
//     <div className="animation-container">
//       <div className="svg-container">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`line${index + 1} svg-image ${
//               index % 2 === 0 ? 'even' : 'odd'
//             }`}
//           >
//             <img src={image} alt={`Line ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const images = [
    '/line 1.svg',
    '/line 2.svg',
    '/line 3.svg',
    '/line 4.svg',
    '/line 5.svg',
    '/line 6.svg',
    '/line 7.svg',
    '/line 8.svg',
  ];

  return (
    <div className="animation-container">
      <div className="svg-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`line${index + 1} svg-image ${
              index % 2 === 0 ? 'even' : 'odd'
            }`}
            style={{ animationDelay: `${index * 0.5}s` }} // Delay each div's animation
          >
            <img src={image} alt={`Line ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;




