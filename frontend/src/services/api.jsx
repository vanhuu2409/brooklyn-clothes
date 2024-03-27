const response = await fetch("http://localhost:4000/allproducts");
const fetchData = await response.json();

export { fetchData };
