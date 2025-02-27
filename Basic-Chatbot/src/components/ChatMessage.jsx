function ChatMessage({message,sender}){
    return (
       <div> 
        {sender==='robot' && (<img src="robot.png" width="50" />)}
        {message}
        {sender==='user' && (<img src="user.png" width="50" />)}
       </div>
    );
}
export default ChatMessage;