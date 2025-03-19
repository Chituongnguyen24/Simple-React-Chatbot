function InputMessage() {
    return (
        <div>
            <input type="text" placeholder="Send a message to chatbot" />
            <button id="sendbtn" style={{ backgroundColor: "#1C8139", color: "white", borderRadius: "5px", padding: "10px 15px", border: "none" }}>
                Send
            </button>
        </div>
    );
}
export default InputMessage;
