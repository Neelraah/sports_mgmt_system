const { fetchJson, renderEmptyState } = window.uiUtils;

const tableTarget = document.getElementById('teams-table');

const renderTeams = (teams) => {
  if (!teams.length) {
    renderEmptyState(tableTarget, 'No teams found.');
    return;
  }

  const rows = teams
    .map(
      (team) => `
      <tr>
        <td><strong>${team.team_name}</strong></td>
        <td>${team.league_name}</td>
        <td>${team.league_division}</td>
        <td><span class="badge">${team.sport_name}</span></td>
      </tr>
    `
    )
    .join('');

  tableTarget.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>League</th>
          <th>Division</th>
          <th>Sport</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

fetchJson('/teams')
  .then(renderTeams)
  .catch(() => renderEmptyState(tableTarget, 'Unable to load teams from the API.'));
