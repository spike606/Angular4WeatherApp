import { Angular4WeatherAppPage } from './app.po';

describe('angular4-weather-app App', () => {
  let page: Angular4WeatherAppPage;

  beforeEach(() => {
    page = new Angular4WeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
