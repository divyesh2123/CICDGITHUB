exports.handler = async (event) => {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            message: "User data processed successfully"
        })
    };


};
