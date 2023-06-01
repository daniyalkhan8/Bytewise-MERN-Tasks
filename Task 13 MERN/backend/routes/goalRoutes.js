const express = require('express');
const router = express.Router();
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController');

const protectRoutes = require('../middleware/authMiddleware');

router.route('/').get(protectRoutes, getGoals).post(protectRoutes, setGoal);

router.route('/:id').put(protectRoutes, updateGoal).delete(protectRoutes, deleteGoal);

module.exports = router;