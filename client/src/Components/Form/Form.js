import React from "react";
import { useState } from "react";
import { onAddPlayer } from "../../api/users";

const Form = () => {
  // ---------- Add player ----------;
  // 
  const [values, setValues] = useState({
    user_name: "",
  });
  // Set message;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handler;
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await onAddPlayer(values);

      setError("");

      setSuccess(data.message.trim());
      setValues({ user_name: "" });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <div className=" delay-300 flex flex-col border-2 border-black rounded-xl items-center  bg-gray-200 p-8 gap-8 mb-10">
      <h1 className="text-2xl font-bold">Add an ew player</h1>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-4">
        <input
          onChange={(e) => onChange(e)}
          name="user_name"
          value={values.user_name}
          placeholder="Player name..."
          className="border-2 border-black rounded-xl px-2 py-1"
          type="text"
        />
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
        <button
          type="submit"
          className="bg-blue-400 rounded-2xl border-black border-2 font-bold transition ease-in-out delay-150 duration:300 hover:bg-green-500 hover:scale-110 hover:cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
