import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID="1e10acee-c123-422d-953a-11955bf5e711"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;