import { Container } from "react-bootstrap";
import TopSection from "../EducationComponents/TopSection/TopSection";
import TopSectionWithoutBtn from "../EducationComponents/TopSection/TopSectionWithoutBtn";
import Body from "../AdminComponents/components/Body/Body";

const AdminPage = () => {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <Container>
        {/*<TopSectionWithoutBtn />*/ }
        <Container/>
        <Body/>
      </Container>
    </div>
  );
};

export default AdminPage;
