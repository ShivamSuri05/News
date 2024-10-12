exports.handler = async function(event, context) {
    const instagramToken = process.env.IG_TOKEN;
    return {
        statusCode: 200,
        body: JSON.stringify({ token: instagramToken }),
    };
};
