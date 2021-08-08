// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import mongoose from "mongoose";
import * as chai from "chai";
import request from 'supertest';

import app from '../src'
import { UserModel } from '../src/models/user.model';
import { HobbiesModel } from '../src/models/hobbies.model';

const should = chai.should();

describe('Hobbies', () => {

    let userInfo: any = {};
    before(async () => {
        await request(app).post('/api/users').send({ name: "User_1" });
        const res = await request(app).get('/api/users');
        userInfo = res.body.data[0];
        await HobbiesModel.deleteMany({});
    });

    it('it should GET all the hobbies', async () => {
        const res = await request(app).get('/api/hobbies');
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.eql(0);
    });

    it('it should not POST a hobby without name key', async () => {
        const hobby = {
            "passionLevel": "Medium",
            "year": 2014
        }
        const res = await request(app).post('/api/hobbies/' + userInfo._id).send(hobby);
        res.body.should.be.a('object');
        res.body.should.have.property('name').eql("Please provide hobby 'name' key");
    });

    it('it should POST a hobby', async () => {
        const hobby = {
            "passionLevel": "Medium",
            "name": "Hobby_1",
            "year": 2014
        }
        const res = await request(app).post('/api/hobbies/' + userInfo._id).send(hobby);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
    });

    it('it should have a hobby named "Hobby_1"', async () => {
        const res = await request(app).get('/api/hobbies/' + userInfo._id);
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.eql(1);
        res.body.data[0].should.have.property('name').eql("Hobby_1");
    });

    it('it should UPDATE a hobby', async () => {
        const data = await request(app).get('/api/hobbies/' + userInfo._id);
        const id = data.body.data[0]._id;
        const res = await request(app).put('/api/hobbies/' + id).send({ name: 'Hobby_2' });
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
    });

    it('it should DELETE a hobby', async () => {
        const data = await request(app).get('/api/hobbies/' + userInfo._id);
        const id = data.body.data[0]._id;
        const res = await request(app).delete('/api/hobbies/'+userInfo._id +"/"+ id);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
    });
});
