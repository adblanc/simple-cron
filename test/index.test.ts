import { every } from '../src';

describe('every', () => {
  it('works with seconds', () => {
    expect(every(2).seconds()).toBe("*/2 * * * * *")
  });

  it('works with minutes', () => {
    expect(every(2).minutes()).toBe("*/2 * * * *")
  });

  it('works with hours', () => {
    expect(every(2).hours()).toBe("* */2 * * *")
  });

  it('works with days', () => {
    expect(every(2).days()).toBe("* * */2 * *")
  });

  it('works with months', () => {
    expect(every(2).months()).toBe("* * * */2 *")
  });

  it('works with years', () => {
    expect(every(2).years()).toBe("* * * * */2")
  });
});
