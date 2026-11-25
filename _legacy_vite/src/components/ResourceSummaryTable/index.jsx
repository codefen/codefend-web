import { getTitle } from "../../data/quote/general";

const PriceRow = ({ resourceType, list, subtotals, title }) => {
  if (list.length <= 0) return null;
  let count = list.length;
  if (resourceType === "socialEngine") {
    count = list.reduce((acc, item) => acc + Number(item.number), 0);
  }
  return (
    <tr>
      <td>
        {title} x{count}
      </td>
      <td>${subtotals[resourceType]}</td>
    </tr>
  );
};

export const ResourceSummaryTable = ({
  resourceLists,
  subtotals,
  totalSubtotal,
  t,
}) => {
  if (!Object.entries(resourceLists).some(([_, list]) => list.length > 0))
    return null;

  return (
    <table>
      <tbody>
        {Object.entries(resourceLists).map(([resourceType, list]) => (
          <PriceRow
            key={resourceType}
            resourceType={resourceType}
            list={list}
            subtotals={subtotals}
            title={t.titles?.[resourceType]}
          />
        ))}

        <tr>
          <td>{t.total}:</td>
          <td>${totalSubtotal}</td>
        </tr>
      </tbody>
    </table>
  );
};
