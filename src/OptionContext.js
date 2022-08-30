import React from "react";

//this is the context
//this context and it's value are used later in another component with var x = useContext(sidebarOption)
export const sidebarOption = React.createContext();

//this is the Component that holds the context provided in value={this is the context value}
export const OptionProvider = sidebarOption.Provider;

export default OptionProvider;