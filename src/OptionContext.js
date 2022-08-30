import React from "react";

//this is the context
// this context and it's value is used then later in another component with var x = useContext(this variable)
export const sidebarOption = React.createContext();

//this is the Component that holds the context provided in value={this is the context value}
export const OptionProvider = sidebarOption.Provider;

export default OptionProvider;