async function fetchData() {
	try {
		const data = await fetchDataFromAPI();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch data');
	}
}
