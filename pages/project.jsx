import { Container, Title, Wrapper } from "../globalStyles";

import TypeItComponent from "../components/TypeIt";

import ProjectComponent from "../components/ProjectComponent";
export default function ProjectPage() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <TypeItComponent title={"PROJECT"} />
        </Title>
        <ProjectComponent />
      </Wrapper>
    </Container>
  );
}
