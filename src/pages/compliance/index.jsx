import HeroCompliance from "./hero";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageComplianceMetaData } from "../../data/metaData";

const Compliance = () => {
  return (
    <>
      <DocumentMetadata meta={pageComplianceMetaData} />
      <HeroCompliance />
    </>
  );
};

export default Compliance;
