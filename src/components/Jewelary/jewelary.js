import List from "../cardList/list";

const Jewelary = (data) => {
	let obj = [];

	for (let index = 0; index < data.data.length; index++) {
		if (data.data[index].category === "jewelery") {
			obj.push(data.data[index]);
		}
	}
	return <List data={obj} />;
};

export default Jewelary;
