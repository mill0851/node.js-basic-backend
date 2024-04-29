async function register({ email, password, confirmPassword }) {
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, confirmPassword })
        });

        if (response.status === 200) {
            return "successful";
        }
        else if (response.status === 400) {
            const data = await response.json();
            return data.errors;
        }
        else {
            console.log(await response.json());
            return "failed";
        }
    } catch (error) {
        console.error(error);
        return "failed";
    }
};

export default register;