import React from "react";
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  // Estado de React -> Hace que la aplicación cambie
  const [userData, setUserData] = React.useState({ name: "", room: -1, roomName: "" , users : -1 });

  // UseEffect de Inicio -> Carga los datos de localStorage al estado de React
  React.useEffect(() => {
    const jsonData = localStorage.getItem("userData");
    const savedData = JSON.parse(jsonData);
    if (!savedData) return;
    // Se cargan los datos al State de React
    setUserData(savedData);
  }, []);

  const changeData = (name, room , roomName  , users ) => {
    const dataToSave = { name, room , roomName , users };
    // Se guardan los datos al LocalStorage y al State de React

    // Creo persistencia de los datos -> Recargar la página, abrir otra sesión
    localStorage.setItem("userData", JSON.stringify(dataToSave));
    // Actualizo el estado de React -> Actualizar la página
    setUserData(dataToSave);
  };

  const data = {
    user: userData, // Exponemos el estado de React que CAMBIA
    changeData, // Cambiamos el estado de React + Persistimos los datos
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
