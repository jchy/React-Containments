import "./styles.css";
import Button from "@mui/material/Button";

const Icon = ({ title, left }) => (
  <>
    <div>
      <h3>{title}</h3>
    </div>
  </>
);

const Boxs = ({ children }) => {
  return <div>{children}</div>;
};

const Row = ({ children, gap = 0, p = 0, border = 0 }) => {
  return (
    <div
      style={{
        display: "flex",
        gap,
        padding: p,
        border: `${border}px solid black`
      }}
    >
      {children}
    </div>
  );
};

const Name = ({ children, left = "", color = "" }) => {
  return (
    <div style={{ float: `${left}`, color: `${color}`, textAlign: `${left}` }}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h2> React Containment </h2>
      <Icon left={<>@</>} title={"hello world"} />
      <Boxs>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </Boxs>
      <Row p={10} gap={12} border={2}>
        <div>Hello</div>
        <div style={{ color: "green" }}>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </Row>
      <Name left={"left"} color={"green"}>
        <p>Author : </p>
        <p> @ Jaswant Chduahry</p>
      </Name>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
