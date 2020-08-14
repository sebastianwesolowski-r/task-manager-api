const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const {testUserId, testUser, setupDatabase} = require('./fxtures/db');

beforeEach(setupDatabase);

test('create task', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            description: 'Test'
        })
        .expect(201)

    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
    expect(task.completed).toEqual(false)
})