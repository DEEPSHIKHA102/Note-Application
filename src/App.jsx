import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");

  };

  const deleteNote =(idx)=>{
    const copyTask = [...task]
      copyTask.splice(idx,1)
      setTask(copyTask)
    }

    const EditNote =(idx)=>{
      const copyTask = [...task]
      setTitle(copyTask[idx].title)
      setDetails(copyTask[idx].details)
      copyTask.splice(idx,1)
      setTask(copyTask)
    
    }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <form
        className="flex flex-col gap-5 p-6 lg:p-10 w-full lg:w-1/2 bg-white shadow-md"
        onSubmit={handlesubmit}
      >
        <h1 className="text-3xl font-bold text-gray-800">Add Notes</h1>

        <input
          className="border border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-400 w-full rounded-md p-2 outline-none transition" // improved focus UI
          type="text"
          placeholder="Heading of your notes"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          className="border border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-400 w-full rounded-md p-2 min-h-[120px] outline-none transition resize-none" // better UX
          placeholder="Write details about your notes here..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          className="bg-gray-800 active:scale-95 rounded-lg w-full text-white p-2 hover:bg-black transition-all duration-200 shadow-md" // better button feel
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="w-full lg:w-1/2 p-6 lg:p-10 h-full overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800">Your Notes</h1>

        <div className="py-10 flex flex-wrap gap-6 items-start justify-start">
          {task.map(function (element, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col items-start justify-between w-56 min-h-44 rounded-2xl bg-white shadow-lg p-4 pb-10 relative overflow-hidden"
              >
                <img
                  src="https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png"
                  alt="note"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                <div className="relative z-10 w-full">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight break-words">
                    {element.title}
                  </h3>
                  <p className="text-sm text-gray-900 mt-2 break-words">
                    {element.details}
                  </p>
                </div>

                <button onClick={()=>{
                  deleteNote(idx)
                }} className="absolute bottom-2 left-2 bg-red-400 font-bold text-gray-700 px-3 py-1 mx-3 my-1 rounded-md hover:bg-red-500 transition active:scale-95">Delete</button>

                <button onClick={()=>{
                  EditNote(idx)
                }} className="absolute bottom-2 right-2 bg-red-400 font-bold text-gray-700 px-4 py-1 mx-5 my-1 rounded-md hover:bg-red-500 transition active:scale-95">Edit</button>
              
              
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
