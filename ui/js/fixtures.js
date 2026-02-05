const { fetchJson, renderEmptyState, formatDate } = window.uiUtils;

const tableTarget = document.getElementById('fixtures-table');

const renderFixtures = (fixtures) => {
  if (!fixtures.length) {
    renderEmptyState(tableTarget, 'No fixtures found.');
    return;
  }

  const rows = fixtures
    .map(
      (fixture) => `
      <tr>
        <td>${formatDate(fixture.fixture_date)}</td>
        <td><strong>${fixture.team_name}</strong></td>
        <td>${fixture.opponent_team_name}</td>
        <td>${fixture.home_away}</td>
        <td>${fixture.result}</td>
        <td>${fixture.score}</td>
        <td><span class="badge">${fixture.fixture_status}</span></td>
      </tr>
    `
    )
    .join('');

  tableTarget.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Team</th>
          <th>Opponent</th>
          <th>Home/Away</th>
          <th>Result</th>
          <th>Score</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

fetchJson('/fixtures')
  .then(renderFixtures)
  .catch(() => renderEmptyState(tableTarget, 'Unable to load fixtures from the API.'));
