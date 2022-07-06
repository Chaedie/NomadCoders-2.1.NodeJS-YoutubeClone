import express from 'express';
import { getEdit, postEdit, watch, deleteVideo, getUpload, postUpload } from '../controllers/videoControllers';

const videoRouter = express.Router();

videoRouter.route('/upload').get(getUpload).post(postUpload);
videoRouter.route('/:id(\\d+)').get(watch);
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);

//
videoRouter.get('/:id(\\d+)/delete', deleteVideo);

export default videoRouter;
