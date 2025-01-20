import React from 'react';

const InformationBox = () => {
    return (
        <div className="m-2">
            <div className="bg-primary container rounded pt-2 p-3">
                <div className="row">

                    <div className="col-6">
                        <h4 className="text-white">Application Information</h4>
                        <ul className="text-white">
                            <li><h5>Frontend: React-based Chat Interface</h5></li>
                            <li><h5>Backend: MySQL or SQLite</h5></li>
                            <li><h5>Features: Send and receive messages</h5></li>
                            <li><h5>Retrieve and display data based on user queries</h5></li>
                            <li><h5>Interactive Chatbot</h5></li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <h5 className="text-white">Chatbot Example</h5>
                        <div className="bg-light p-3 rounded">
                            <div className="d-flex justify-content-start mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>User:</strong> Hello
                                </p>
                            </div>

                            <div className="d-flex justify-content-end mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>Bot:</strong> Hi! How can I help you today?
                                </p>
                            </div>

                            <div className="d-flex justify-content-start mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>User:</strong> What's the weather like today?
                                </p>
                            </div>

                            <div className="d-flex justify-content-end mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>Bot:</strong> The weather is sunny with a high of 25°C.
                                </p>
                            </div>

                            <div className="d-flex justify-content-start mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>User:</strong> Tell me a joke.
                                </p>
                            </div>

                            <div className="d-flex justify-content-end mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>Bot:</strong> Why don’t skeletons fight each other? They don’t have the guts!
                                </p>
                            </div>

                            <div className="d-flex justify-content-start mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>User:</strong> What's the time?
                                </p>
                            </div>

                            <div className="d-flex justify-content-end mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>Bot:</strong> It’s currently 3:15 PM.
                                </p>
                            </div>

                            <div className="d-flex justify-content-start mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>User:</strong> Goodbye
                                </p>
                            </div>

                            <div className="d-flex justify-content-end mb-2">
                                <p className="mb-0" style={{ color: "black" }}>
                                    <strong>Bot:</strong> Goodbye! Have a great day ahead!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationBox;
