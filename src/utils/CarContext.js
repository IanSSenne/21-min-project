import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";

// Creating our car provider. Accepts an argument of `props`
export default function CarProvider(props) {
	// The provider component will wrap all other components inside of it that need access to our global state
	return <Provider store={store} {...props}></Provider>;
}

export const useCar = (value) => useSelector((state) => state);
