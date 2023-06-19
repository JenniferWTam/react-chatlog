import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <div>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onUpdateLike={props.onUpdateLike}
          onHeartClicks={props.onHeartClicks}
        ></ChatEntry>
      </div>
    );
  });

  return <section className="chat-log">{chatEntryComponents}</section>;
};

export default ChatLog;