import React, { useState } from "react";
import Checkbox from "../../../components/common/Checkbox";
import { Input } from "../../../components/common/Input";
import { Button } from "../../../components/common/Button";

const StorieForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resume, setResume] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [periode, setPeriode] = useState("");
  const [langue, setLangue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // envoyer les données à l'API ou faire d'autres actions
  };

  const handleLanguageChange = (e) => {
    setLangue(e.target.value);
  };

  return (
   <div  className="p-6 bg-white shadow-lg rounded-2xl">
      <h4 className="self-center text-xl font-light text-green-800 sm:text-2xl text-center dark:text-white mb-7">Nouvelle création</h4>
    <form
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        id="storie-title"
        className=" rounded-lg mb-5 border-transparent appearance-none flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="title"
        placeholder="Ecrire le titre de l'histoire"
        //   value={newUser.pass}
        //   onChange={handleChange}
      />

      <Input
        type="text"
        id="storie-description"
        className=" rounded-lg mb-5 border-transparent appearance-none flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="description"
        placeholder="Ecrire la description de l'histoire"
        //   value={newUser.pass}
        //   onChange={handleChange}
      />

      <textarea
        className="flex-1 mb-5 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        id="comment"
        placeholder="Ecrire le resumé"
        name="comment"
        rows="5"
        cols="40"
      ></textarea>

      <textarea
        className="flex-1 mb-5 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        id="comment"
        placeholder="Ecrire l'introduction"
        name="comment"
        rows="5"
        cols="40"
      ></textarea>

      <Input
        type="periode"
        id="storie-periode"
        className=" rounded-lg mb-5 border-transparent appearance-none flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="periode"
        placeholder="Periode de l'histoire"
        //   value={newUser.pass}
        //   onChange={handleChange}
      />

      <Checkbox
        title="Langue"
        type="radio"
        items={["arabe", "english", "frensh"]}
        onChange={handleLanguageChange}
        name="langue"
      />
      <Button
        type="submit"
        className="py-2 px-4 mt-5 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        text="Create"
      />
    </form>
    </div>

  );
};

export default StorieForm;
