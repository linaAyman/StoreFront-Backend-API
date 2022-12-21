import express from 'express';

const routeErrHandler = (req: express.Request, res: express.Response): void => {
  res.status(400).json('The endpoint you entered is incorrect');
};
export default routeErrHandler;
