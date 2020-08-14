const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const Task = require('../src/models/task');
const {
    testUserId,
    testUser,
    testUserTwo,
    testTask,
    setupDatabase
} = require('./fxtures/db');

beforeEach(setupDatabase);

test('login user', async () => {
    const response = await request(app)
        .post('/users/login')
        .send({
            email: testUser.email,
            password: testUser.password
        })
        .expect(200)

    const user = await User.findById(testUserId);
    expect(user.tokens[1].token).toBe(response.body.token);
});

test('fail login user', async () => {
    await request(app)
        .post('/users/login')
        .send({
            email: 'email@gmail.com',
            password: 'password'
        })
        .expect(400)
});

test('user get profile', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send()
        .expect(200)
});

test('fail user get profile', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
});

test('delete user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(testUserId);
    expect(user).toBeNull();
});

test('fail delete user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
});

test('upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .attach('avatar', 'tests/fxtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(testUserId);
    expect(user.avatar).toEqual(expect.any(Buffer))
});

test('update user', async () => {
    const response = await request(app)
        .patch('/users/me/')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            name: 'UpdateUser'
        })
        .expect(200)

    const user = await User.findById(testUserId);
    expect(user.name).toBe(response.body.name);
});

test('fail update user', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            token: 'motherlode123'
        })
        .expect(400)
});

test('get user tasks', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send()
        .expect(200)

    expect(response.body.length).toEqual(2);
});

test('fail delete task', async () => {
    const response = await request(app)
        .delete(`/tasks/${testTask._id}`)
        .set('Authorization', `Bearer ${testUserTwo.tokens[0].token}`)
        .send()
        .expect(404)

    const task = await Task.findById(testTask._id);
    expect(task).not.toBeNull();
});

