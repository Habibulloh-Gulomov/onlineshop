import React from "react";
import List from "../cardList/list";

const Womens = (data) => {
	let obj = [];

	for (let index = 0; index < data.data.length; index++) {
		if (data.data[index].category === "women's clothing") {
			obj.push(data.data[index]);
		}
	}
	return <List data={obj} />;
};

export default Womens;
