// import React from 'react';
// import './App.css';
// import ChatLog from './components/ChatLog';
// import chatMessages from './data/messages.json';
// import ColorChoice from './components/ColorChoice';
// import { useState } from 'react';


// const App = () => {

//   const [messagesData, setMessagesData] = useState(chatMessages);

//   const [selectedColor, setSelectedColor] = useState('#000000');
//   const handleColorSelection = (color) => {
//     setSelectedColor(color);
//   };
//   const userOne = messagesData[0]['sender'];

//   const findUserTwo = (messagesData) => {
//     for (const message of messagesData) {
//       if (message['sender'] !== userOne) {
//         return message['sender'];
//       }
//     }
//   };

//   const userTwo = findUserTwo(messagesData);


//   const [numLiked, setNumLiked] = useState(0);

//   const onHeartClicks = (liked) => {
//     if (liked) {
//       setNumLiked(numLiked - 1);
//     } else {
//       setNumLiked(numLiked + 1);
//     }
//   };

//   const onUpdateLikeFx = (id) => {
//     const newMessages = messagesData.map((message) => {
//       if (message.id === id) {
//         return { ...message, liked: !message.liked };
//       } else {
//         return message;
//       }
//     });

//     setMessagesData(newMessages);
//   };
  
//   return (
//     <div id="App">
//       <header>
//       <h1>
//           Chat between {userOne} and {userTwo}
//         </h1>
//         <section>
//           <h2 className="widget" id="heartWidget">
//             {numLiked} ❤️s
//           </h2>
//         </section>
//       </header>
//       <main>
//       <ColorChoice setColorCallback={handleColorSelection} />
//       <ChatLog
//           entries={messagesData}
//           onUpdateLike={onUpdateLikeFx}
//           onHeartClicks={onHeartClicks}
//           selectedColor={selectedColor}
//         />
//       </main>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';

const App = () => {
  const [messagesData, setMessagesData] = useState(chatMessages);


  const userOne = messagesData[0]['sender'];
  const findUserTwo = (messagesData) => {
    for (const message of messagesData) {
      if (message['sender'] !== userOne) {
        return message['sender'];
      }
    }
  };
  const userTwo = findUserTwo(messagesData);

  const [selectedColor, setSelectedColor] = useState('#000000');
  const handleColorSelection = (color) => {
    setSelectedColor(color);

  };


  const [numLiked, setNumLiked] = useState(0);
  const onHeartClicks = (liked) => {
    if (liked) {
      setNumLiked(numLiked - 1);
    } else {
      setNumLiked(numLiked + 1);
    }
  };

  const onUpdateLikeFx = (id) => {
    const newMessages = messagesData.map((message) => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setMessagesData(newMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {userOne} and {userTwo}
        </h1>
        <section>
          <h2 className="widget" id="heartWidget">
            {numLiked} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ColorChoice setColorCallback={handleColorSelection} />
        <ChatLog
          entries={messagesData}
          onUpdateLike={onUpdateLikeFx}
          onHeartClicks={onHeartClicks}
          selectedColor={selectedColor}
        />
      </main>
    </div>
  );
};

export default App;
