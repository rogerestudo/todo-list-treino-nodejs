import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
describe('TodoListController (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const status = ['CANCELED', 'PENDING', 'IN_PROGRESS', 'COMPLETED'];
  status.forEach((status) => {
    it(`/task/todos?getByStatus=${status} (GET)`, async () => {
      const response = await request(app.getHttpServer())
        .get(`/task/todos?getByStatus=${status}`)
        .expect(200);
      expect(response.text).toEqual(`This action returns all tasks ${status}`);
    });
  });

  it(`/task/todos/changeStatus/{id} (PATCH)`, async () => {
    const response = await request(app.getHttpServer())
      .get(`/task/todos/changeStatus/1`)
      .expect(200);
    expect(response.text).toEqual(`This action returns all tasks active`);
  });

  it(`/task/todos/changeTodo/{id} (PATCH)`, async () => {
    const response = await request(app.getHttpServer())
      .get(`/task/todos/changeTodo/1`)
      .expect(200);
    expect(response.text).toEqual(`This action returns all tasks active`);
  });

  it(`/task/todos/delete/{id} (DELETE)`, async () => {
    const response = await request(app.getHttpServer())
      .get(`/task/todos/delete/1`)
      .expect(200);
    expect(response.text).toEqual(`This action returns all tasks active`);
  });

  it(`/task/todos/getDetails/{id} (GET)`, async () => {
    const response = await request(app.getHttpServer())
      .get(`/task/todos/getDetails/1`)
      .expect(200);
    expect(response.text).toEqual(`This action returns all tasks active`);
  });

  it(`/task/todos/getAll (GET)`, async () => {
    const response = await request(app.getHttpServer())
      .get(`/task/todos/getAll`)
      .expect(200);
    expect(response.text).toEqual(`This action returns all tasks active`);
  });
});
