const acceptUserDataFromApi = async function () {
	const response = await fetch(
		"https://bootcamp-api.codeit.kr/api/sample/user"
	);
	const convertedResponse = await response.json();
	return convertedResponse;
};

export { acceptUserDataFromApi };
