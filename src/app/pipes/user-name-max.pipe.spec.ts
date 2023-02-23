import { UserNameMaxPipe } from './user-name-max.pipe';

describe('UserNameMaxPipe', () => {
  it('create an instance', () => {
    const pipe = new UserNameMaxPipe();
    expect(pipe).toBeTruthy();
  });
});
