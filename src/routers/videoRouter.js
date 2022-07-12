import express from 'express';
import { getEdit, postEdit, watch, deleteVideo, getUpload, postUpload } from '../controllers/videoControllers';

const videoRouter = express.Router();

videoRouter.route('/:id([0-9a-f]{24})').get(watch);
videoRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

//
videoRouter.get('/:id/delete', deleteVideo);

export default videoRouter;
