import express from 'express';

const router = express.Router();


const apiCtrl = require('./api.ctrl');

router.get('/ajax/list', apiCtrl.list);
router.get('/ajax/detail', apiCtrl.detail);
router.get('/ajax/search', apiCtrl.search);
router.post('/ajax/form', apiCtrl.form);

export default router;
