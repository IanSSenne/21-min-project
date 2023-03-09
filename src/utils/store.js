import { createStore } from "redux";
import reducers from "./reducers";
const randomNum = () => Math.floor(Math.random() * 20000);

const cars = [
	{
		id: randomNum(),
		make: "Honda",
		model: "Civic",
		year: "2008",
		isRunning: false,
	},
	{
		id: randomNum(),
		make: "Tesla",
		model: "Y",
		year: "2021",
		isRunning: false,
	},
];

export default createStore(reducers, { cars });
