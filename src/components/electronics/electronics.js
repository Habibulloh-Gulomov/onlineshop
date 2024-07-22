import List from "../cardList/list";

const Electronics = (data) => {
	let obj = [];

	for (let index = 0; index < data.data.length; index++) {
		if (data.data[index].category === "electronics") {
			obj.push(data.data[index]);
		}
	}
	return <List data={obj} />;
};

export default Electronics;
