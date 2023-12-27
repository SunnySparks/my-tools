import React, { createContext, useEffect, useState } from "react";

const themes = [
  {
    name: "Pastel",
    className: "pastel-theme",
    index: "zero",
  },
  {
    name: "Gradient",
    className: "gradient-theme",
    index: "one",
  },
  {
    name: "retro",
    className: "retro-theme",
    index: "two",
  },
];

const ContextProvider = ({ children }) => {
  const [themeChoose, setThemeChoose] = useState(0);

  useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("tema_pref"));
    setThemeChoose(getTheme || 0);
    //let seeTasks = localStorage.getItem("tasks");
    //let seeDoneTasks = localStorage.getItem("donetasks");
    //let tasksArr = JSON.parse(seeTasks || [""]);
    //let doneTasksArr = JSON.parse(seeDoneTasks || [""]);
    //setTareas(tasksArr);
    //setTareasHechas(doneTasksArr);
    //console.log("Tareas", tareas, typeof tareas);
    //console.log("Tareas Hechas", tareasHechas, typeof tareasHechas);
  }, []);

  const changeTheme = (newTheme) => {
    setThemeChoose(newTheme);
    localStorage.setItem("tema_pref", JSON.stringify(newTheme));
  };

  const navOptionsGlobales = [
    { link: "/", text: "Inicio" },
    { link: "/calculadora", text: "Calculadora" },
    { link: "/todoList", text: "To-do List" },
  ];

  const initialValue = {
    navOptionsGlobales,
    themeChoose,
    changeTheme,
    themes,
    //tareas,
    //tareasHechas,
    //setTareas,
    //setTareasHechas,
  };

  return (
    <AppContext.Provider value={initialValue}>
      <> {children}</>
    </AppContext.Provider>
  );
};

export default ({ element }) => <ContextProvider>{element}</ContextProvider>;

export const AppContext = createContext({
  themeChoose: 0,
  changeTheme: () => {},
  setHistory: () => {},
  history: [],
  themes: [],
  //tareas: [],
  //setTareas: () => {},
  //tareasHechas: [],
  //setTareasHechas: () => {},
});
