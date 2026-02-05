const { fetchJson, renderEmptyState } = window.uiUtils;

const tableTarget = document.getElementById('members-table');

const renderMembers = (members) => {
  if (!members.length) {
    renderEmptyState(tableTarget, 'No members found.');
    return;
  }

  const rows = members
    .map(
      (member) => `
      <tr>
        <td><strong>${member.first_name} ${member.last_name}</strong></td>
        <td>${member.membership_name}</td>
        <td>${member.mobile_number || '—'}</td>
        <td>${member.subscription_method}</td>
      </tr>
    `
    )
    .join('');

  tableTarget.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Membership</th>
          <th>Mobile</th>
          <th>Payment Method</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

fetchJson('/members')
  .then(renderMembers)
  .catch(() => renderEmptyState(tableTarget, 'Unable to load members from the API.'));
