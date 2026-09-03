import React from "react";
import { HiPaperAirplane } from "react-icons/hi2";

const Chatbot = () => {
    const [messages, setMessages] = React.useState([]);
    const [input, setInput] = React.useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        setMessages([
            ...messages,
            {
                sender: "user",
                text: input,
            },
        ]);



        const response = await fetch("http://localhost:3000/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const aiReply = JSON.parse(data.reply);

        let botMessage = "";

        if (aiReply.type === "recommendation") {
            botMessage = aiReply.response
                .map((movie) => movie.title)
                .join(", ");
        } else {
            botMessage = aiReply.response;
        }

        setMessages((prev) => [
            ...prev,
            {
                sender: "bot",
                text: botMessage,
            },
        ]);


        setInput("");
    };



    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center p-4 transition-colors duration-300">
            <div className="w-full max-w-2xl h-[85vh] bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">

                {/* Header */}
                <div className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                        AI
                    </div>

                    <div>
                        <h1 className="font-semibold text-lg">Movie AI Assistant</h1>
                        <p className="text-sm text-blue-100 dark:text-blue-200">
                            Ask me anything about movies
                        </p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-900">

                    {/* Bot Message */}
                    <div className="flex">
                        <div className="max-w-xs rounded-2xl rounded-bl-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-3">
                            👋 Hi! I'm your Movie AI Assistant.
                            <br />
                            Ask me about any movie, actor, genre, or for recommendations.
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-900">

                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${msg.sender === "user"
                                        ? "bg-blue-600 text-white rounded-br-sm"
                                        : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Input */}
                <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            value={input} onChange={(e) => { setInput(e.target.value) }}
                            placeholder="Ask about a movie..."
                            className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }} />

                        <button onClick={sendMessage} className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white transition hover:bg-blue-700 dark:hover:bg-blue-600">
                            <HiPaperAirplane className="text-xl" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chatbot;