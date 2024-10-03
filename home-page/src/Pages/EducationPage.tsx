import { Container } from "react-bootstrap";
import TopSection from "../EducationComponents/TopSection/TopSection";
import TopSectionWithoutBtn from "../EducationComponents/TopSection/TopSectionWithoutBtn";

const EducationPage = () => {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <Container>
        <TopSectionWithoutBtn />
      </Container>
    </div>
  );
};

export default EducationPage;
