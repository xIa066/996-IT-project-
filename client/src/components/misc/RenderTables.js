import React from 'react';
export const renderLeftTable = weather => {

  return(
    <table className="table table-borderless">
      <tbody>
        <tr>
          <th scope="row">Precipitation:</th>
          <td>{(weather.precipProbability * 100).toFixed(1)}%</td>
        </tr>
        <tr>
          <th scope="row">Humidity:</th>
          <td>{weather.humidity}</td>
        </tr>
        <tr>
          <th scope="row">Wind speed:</th>
          <td>{weather.windSpeed} kn/s</td>
        </tr>
        <tr>
          <th scope="row">UV index:</th>
          <td>{weather.uvIndex}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const renderRightTable = weather => {
  return(
    <table className="table table-borderless">
      <tbody>
        <tr>
          <th scope="row">Dew Point:</th>
          <td>{weather.dewPoint}°</td>
        </tr>
        <tr>
          <th scope="row">Wind gust:</th>
          <td>{weather.windGust} km/h</td>
        </tr>
        <tr>
          <th scope="row">Visibility:</th>
          <td>{weather.visibility} miles</td>
        </tr>
      </tbody>
    </table>
  );
};
