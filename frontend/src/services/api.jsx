const response = await fetch("http://localhost:4000/api/product/getall");
const fetchData = await response.json();

export { fetchData };
