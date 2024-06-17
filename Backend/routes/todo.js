const { v4: uuidv4 } = require('uuid');    
const moment = require('moment');
const express = require('express');
const router = express.Router();

let mockData = [];

// Get all todos
router.get('/', (req, res) => {
    res.send({
        message: 'Todo data',
        data: mockData
    });
});

// Add a new todo
router.post('/', (req, res) => {
    const todo = req.body;
    const id = uuidv4();
    todo.id = id;
    const createdAt = moment().toISOString(); 
    mockData.push({ id, ...todo, createdAt });
    res.json({
        message: 'Todo added successfully',
        data: todo
    });
});

// Update a todo
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const newUpdatedValue = req.body;
    const indexToUpdate = mockData.findIndex((item) => item.id === id);
    if (indexToUpdate !== -1) {
        const oldValueToBeUpdated = mockData[indexToUpdate];
        const updatedAt = moment().toISOString(); 
        mockData[indexToUpdate] = {
            ...oldValueToBeUpdated,
            ...newUpdatedValue,
            updatedAt
        };
        res.json({
            message: 'Todo updated successfully',
            data: mockData[indexToUpdate]
        });
    } else {
        res.status(404).json({
            message: 'Todo not found'
        });
    }
});

// Delete a todo
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = mockData.filter((item) => item.id !== id);
    if (updatedData.length !== mockData.length) {
        mockData = updatedData;
        res.json({
            message: 'Todo deleted successfully',
            data: mockData
        });
    } else {
        res.status(404).json({
            message: 'Todo not found'
        });
    }
});

module.exports = router;
