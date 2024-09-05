import Friends1 from "./friends1";
import Linkedin from "../../sections/linkedin";
import Herofriends from "./herofriends";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageAboutUsMetaData } from "../../data/metaData";

const Friends = () => {
  return (
    <>
      <DocumentMetadata meta={pageAboutUsMetaData} />
      <Herofriends />
      <Friends1 />
      <Linkedin />
    </>
  );
};

export default Friends;
