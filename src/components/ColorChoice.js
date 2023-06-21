import React from 'react';

const ColorChoice = ({ setColorCallback }) => {
  const handleColorSelection = (color) => {
    setColorCallback(color);
  };

  return (
    <div className="color-choice">
      <button onClick={() => handleColorSelection('red')}>
        <span role="img" aria-label="Red">
          🔴
        </span>
      </button>
      <button onClick={() => handleColorSelection('orange')}>
        <span role="img" aria-label="Orange">
          🟠
        </span>
      </button>
      <button onClick={() => handleColorSelection('yellow')}>
        <span role="img" aria-label="Yellow">
          🟡
        </span>
      </button>
      <button onClick={() => handleColorSelection('green')}>
        <span role="img" aria-label="Green">
          🟢
        </span>
      </button>
      <button onClick={() => handleColorSelection('blue')}>
        <span role="img" aria-label="Blue">
          🔵
        </span>
      </button>
      <button onClick={() => handleColorSelection('purple')}>
        <span role="img" aria-label="Purple">
          🟣
        </span>
      </button>
    </div>
  );
};

export default ColorChoice;



// TRIED THIS - DIDNT WORK

// import React from 'react';

// const ColorChoice = ({ setColorCallback }) => {
//     const handleColorSelection = (sender, color) => {
//       setColorCallback(sender, color);
//     };

//   return (
//     <div className="color-choice">
//       {/* LOCAL */}
//       <div>
//         <button onClick={() => handleColorSelection('local', 'red')}>
//           <span role="img" aria-label="Red">
//             🔴
//           </span>
//         </button>
//          <button onClick={() => handleColorSelection('local', 'orange')}>
//          <span role="img" aria-label="Orange">
//            🟠
//          </span>
//        </button>
//        <button onClick={() => handleColorSelection('local', 'yellow')}>
//          <span role="img" aria-label="Yellow">
//            🟡
//          </span>
//        </button>
//        <button onClick={() => handleColorSelection('local', 'green')}>
//          <span role="img" aria-label="Green">
//            🟢
//          </span>
//        </button>
//        <button onClick={() => handleColorSelection('local', 'blue')}>
//          <span role="img" aria-label="Blue">
//            🔵
//          </span>
//        </button>
//        <button onClick={() => handleColorSelection('local', 'purple')}>
//          <span role="img" aria-label="Purple">
//            🟣
//          </span>
//        </button>
//        </div>
// {/* REMOTE */}
//       <div>
//         <button onClick={() => handleColorSelection('remote', 'red')}>
//           <span role="img" aria-label="Red">
//             🔴
//           </span>
//         </button>
//         <button onClick={() => handleColorSelection('remote', 'orange')}>
//         <span role="img" aria-label="Orange">
//           🟠
//         </span>
//       </button>
//       <button onClick={() => handleColorSelection('remote', 'yellow')}>
//         <span role="img" aria-label="Yellow">
//           🟡
//         </span>
//       </button>
//       <button onClick={() => handleColorSelection('remote', 'green')}>
//         <span role="img" aria-label="Green">
//           🟢
//         </span>
//       </button>
//       <button onClick={() => handleColorSelection('remote', 'blue')}>
//         <span role="img" aria-label="Blue">
//           🔵
//         </span>
//       </button>
//       <button onClick={() => handleColorSelection('remote', 'purple')}>
//         <span role="img" aria-label="Purple">
//           🟣
//         </span>
//       </button>
//     </div>
//     </div>
//   );
// };

//     export default ColorChoice;