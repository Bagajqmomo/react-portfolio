// import { createContext, useContext, useState, useEffect } from "react";

// const AppContext = createContext();

// // Get the initial DaisyUI theme from localStorage or default to "halloween"
// const getInitialTheme = () => {
//   return localStorage.getItem("theme") || "halloween"; // Default theme
// };

// export const AppProvider = ({ children }) => {
//   const [theme, setTheme] = useState(getInitialTheme());

//   // Toggle DaisyUI theme
//   const toggleTheme = () => {
//     const newTheme = theme === "halloween" ? "lemonade" : "halloween"; // Switch themes
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme); // Apply theme
//   };

//   // Apply the initial theme on mount
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <AppContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(AppContext);
