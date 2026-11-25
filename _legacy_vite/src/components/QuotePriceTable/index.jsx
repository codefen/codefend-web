export const QuotePriceTable = ({ quoteDescriptions }) => (
  <table>
    <thead>
      <tr>
        <th>Descripción</th>
        <th>Precio unitario</th>
      </tr>
    </thead>
    <tbody>
      {quoteDescriptions.map((description, i) => (
        <tr key={`quote-description-${i}`}>
          <td>{description.title}</td>
          <td>{description.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
