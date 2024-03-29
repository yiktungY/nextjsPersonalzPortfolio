import TypeItComponent from "../components/TypeIt";
import ResumeComponent from "../components/ResumeComponent";
import { Container, Title, Wrapper } from "../globalStyles";
export default function ResumePage() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <TypeItComponent title={"RESUME"} />
        </Title>
        <ResumeComponent />
      </Wrapper>
    </Container>
  );
}
