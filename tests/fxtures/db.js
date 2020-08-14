const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const testUserId = new mongoose.Types.ObjectId();
const testUser = {
    _id: testUserId,
    name: 'TestUser',
    email: 'pzzllksk2mmm3max@gmail.com',
    password: 'jStpl323',
    tokens: [{
        token: jwt.sign({_id: testUserId}, process.env.JWT_TOKEN)
    }]
}

const testUserTwoId = new mongoose.Types.ObjectId();
const testUserTwo = {
    _id: testUserTwoId,
    name: 'TestUserTwo',
    email: 'pzzllksk2mmm3max2@gmail.com',
    password: 'jStpl3232',
    tokens: [{
        token: jwt.sign({_id: testUserTwoId}, process.env.JWT_TOKEN)
    }]
}

const testTask = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Test Task',
    completed: false,
    author: testUserId
}

const testTaskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Test Task2',
    completed: true,
    author: testUserId
}

const testTaskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Test Task3',
    completed: false,
    author: testUserTwoId
}

const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(testUser).save();
    await new User(testUserTwo).save();
    await new Task(testTask).save();
    await new Task(testTaskTwo).save();
    await new Task(testTaskThree).save();
}

module.exports = {
    testUserId,
    testUser,
    testUserTwoId,
    testUserTwo,
    testTask,
    testTaskTwo,
    testTaskThree,
    setupDatabase
}