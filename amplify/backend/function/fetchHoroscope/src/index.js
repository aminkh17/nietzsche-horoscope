import sdk from "aws-sdk";
const {S3} = sdk;
const s3 = new S3();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {

    const params = {
        Bucket: 'nietzsche-horoscope-data',
        Key: 'tsz-data.json',
    };    

    if(event.httpMethod === 'POST') {
        try {
            const data = await s3.getObject(params).promise();
            const jsonData = JSON.parse(data.Body.toString('utf-8'));
            const range = jsonData.pages.length;
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*", // Allow from any origin
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  },
                body: JSON.stringify({ message: 'Preflight request successful', range: range }),
            };

        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: error }),
            };


        }

        
    }
    else
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        const randomNumbers = event.queryStringParameters?.numbers?.split(',').map(Number);

        if (!randomNumbers || randomNumbers.length !== 3) {
            return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Please provide exactly 3 random numbers.' }),
            };
        }

        try {
            
            const data = await s3.getObject(params).promise();
            const jsonData = JSON.parse(data.Body.toString('utf-8'));
            
            const result = randomNumbers.map((num) => jsonData.pages[num]);

            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*", // Allow from any origin
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                },
                body: JSON.stringify(result),
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: error }),
            };
        };
    }

};
