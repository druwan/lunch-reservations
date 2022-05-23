import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  try {
    console.log(req);
    const token = req.headers.authorization.split(' ')[1];
    const isCustomerAuthenticated = token.length < 500;
    let decodedData;

    if (token && isCustomerAuthenticated) {
      decodedData = jwt.verify(token, 'test');
      req.customerId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.customerId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
