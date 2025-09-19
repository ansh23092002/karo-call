
const BASE_URL = "https://karocallservices.com/api";
const MakeRequest = async (endpoint,method,data={}) => {
    const url = `${BASE_URL}${endpoint}`;
    if (method === 'GET') {
        const response = await fetch(url);
        return response.json();
    } else {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
};

export default MakeRequest;