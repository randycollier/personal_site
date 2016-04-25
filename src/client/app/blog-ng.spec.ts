import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {BlogNgApp} from '../app/blog-ng';

beforeEachProviders(() => [BlogNgApp]);

describe('App: BlogNg', () => {
  it('should have the `defaultMeaning` as 42', inject([BlogNgApp], (app: BlogNgApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([BlogNgApp], (app: BlogNgApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

