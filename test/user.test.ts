// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import mongoose from "mongoose";
import * as chai from "chai";
import request from 'supertest';

import app from '../src'
import { UserModel } from '../src/models/user.model';

const should = chai.should();

describe('User', () => {

    before(async () => {
        await UserModel.deleteMany({});
    });

    it('it should GET all the users', async () => {
        const res = await request(app).get('/api/users');
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.eql(0);
    });

    it('it should not POST a user without name key', async () => {
        const user = {}
        const res = await request(app).post('/api/users').send(user);
        res.body.should.be.a('object');
        res.body.should.have.property('name').eql("Please provide user 'name' key");
    });

    it('it should POST a user', async () => {
        const user = {
            name: "User_1"
        }
        const res = await request(app).post('/api/users').send(user);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
    });

    it('it should have a User_1', async () => {
        const res = await request(app).get('/api/users');
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.eql(1);
    });

    it('it should UPDATE a user', async () => {
        const data = await request(app).get('/api/users');
        const id = data.body.data[0]._id;
        const res = await request(app).put('/api/users/' + id).send({ name: 'User_2' });
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
    });

    it('it should DELETE a user', async () => {
        const data = await request(app).get('/api/users');
        const id = data.body.data[0]._id;
        const res = await request(app).delete('/api/users/' + id);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
    });
});
