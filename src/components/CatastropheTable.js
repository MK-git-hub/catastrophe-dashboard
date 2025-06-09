
function CatastropheTable({ data, loading }) {
  if (loading) {
    return <div>Loading table...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No catastrophe data available.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Disaster Name</th>
          <th>Address</th>
          <th>Website</th>
          <th>Severity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((catastrophe, idx) => (
          <tr key={idx}>
            <td>{catastrophe.name}</td>
            <td>{catastrophe.address.zipcode}</td>
            <td>{catastrophe.website}</td>
            <td>{catastrophe.severity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CatastropheTable;
