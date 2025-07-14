import React from "react";
import {
  Hnyform,
  HnyformHorizontal,
  HnyformPlaceholder,
  HnyformBoxed,
  HnyformUnderlineVertical,
  HnyformUnderlineHorizontal,
  HnyformOutlined,
  HnyformInline,
} from "hnyform";

const schema = {
  "User Info": [
    {
      level: "Name",
      type: "text",
      required: true,
      format: ["trim", "capitalize"],
      validation: ["min:3"],
      value: "John Doe",
    },
    {
      level: "Email",
      type: "email",
      required: true,
      format: ["trim", "lower"],
      validation: ["email"],
      span: 2,
    },
    {
      level: "Birthdate",
      type: "date",
      validation: ["past"],
    },
    {
      level: "Event Date",
      type: "date",
      validation: ["future"],
    },
    {
      level: "Preferred Time",
      type: "datetime-local",
      validation: ["future"],
    },
    {
      level: "Volume",
      type: "range",
      format: [20],
    },
    {
      level: "Website",
      type: "url",
    },
    {
      level: "Search Keyword",
      type: "search",
    },
    {
      level: "Resume",
      type: "file",
    },
    {
      level: "Gender",
      type: "radio",
      options: [3, ["Male", "Female", "Other"]],
    },
    {
      level: "Hobbies",
      type: "checkboxes",
      options: [2, ["Reading", "Gaming", "Traveling", "Music"]],
    },
    {
      level: "Country",
      type: "selection",
      options: ["India", "USA", "UK"],
      multiple: true,
      all: true,
    },
    {
      level: "Item",
      type: "selection",
      options: {
        Country: ["India", "USA", "UK"],
        Fruit: ["Mango", "Orange", "Apple"],
      },
      multiple: true,
      checkbox: true,
      all: true,
    },
  ],
};

function App() {
  return (
    <div
      style={{
        background: "#fffbee",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#ffbb00" }}>🐝 HoneyForms Demo</h1>

<section style={sectionStyle}>
  <h2 style={titleStyle}>Schema Code (VS Code Style)</h2>
  <pre
    style={{
      backgroundColor: "#1e1e1e",
      color: "#fff6ee",
      padding: "1rem",
      borderRadius: "8px",
      overflowX: "auto",
      fontFamily: "'Fira Code', monospace",
      fontSize: "0.9rem",
    }}
  >
    <code>{`import {
  Hnyform,
  HnyformHorizontal,
  HnyformPlaceholder,
  HnyformBoxed,
  HnyformUnderlineVertical,
  HnyformUnderlineHorizontal,
  HnyformOutlined,
  HnyformInline,
} from "hnyform";

const schema = {
  "User Info": [
    {
      level: "Name",
      type: "text",
      required: true,
      format: ["trim", "capitalize"],
      validation: ["min:3"],
      value: "John Doe",
    },
    {
      level: "Email",
      type: "email",
      required: true,
      format: ["trim", "lower"],
      validation: ["email"],
      span: 2,
    },
    {
      level: "Birthdate",
      type: "date",
      validation: ["past"],
    },
    {
      level: "Event Date",
      type: "date",
      validation: ["future"],
    },
    {
      level: "Preferred Time",
      type: "datetime-local",
      validation: ["future"],
    },
    {
      level: "Volume",
      type: "range",
      format: [20],
    },
    {
      level: "Website",
      type: "url",
    },
    {
      level: "Search Keyword",
      type: "search",
    },
    {
      level: "Resume",
      type: "file",
    },
    {
      level: "Gender",
      type: "radio",
      options: [3, ["Male", "Female", "Other"]],
    },
    {
      level: "Hobbies",
      type: "checkboxes",
      options: [2, ["Reading", "Gaming", "Traveling", "Music"]],
    },
    {
      level: "Country",
      type: "selection",
      options: ["India", "USA", "UK"],
      multiple: true,
      all: true,
    },
    {
      level: "Item",
      type: "selection",
      options: {
        Country: ["India", "USA", "UK"],
        Fruit: ["Mango", "Orange", "Apple"],
      },
      multiple: true,
      checkbox: true,
      all: true,
    },
  ],
};`}</code>
  </pre>
</section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Classic Hnyform</h2>
        <ShowCode title="Hnyform">{`<Hnyform schema={schema} cols={4} api="https://dummyjson.com/posts/add" color="orangered" bg="#fff9db" />`}</ShowCode>
        <Hnyform schema={schema} cols={4} api="https://dummyjson.com/posts/add" color="orangered" bg="#fff9db" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Horizontal Form</h2>
        <ShowCode title="HnyformHorizontal">{`<HnyformHorizontal schema={schema} cols={3} bg="#fffde7" color="#d17b00" />`}</ShowCode>
        <HnyformHorizontal schema={schema} cols={3} bg="#fffde7" color="#d17b00" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Placeholder Form</h2>
        <ShowCode title="HnyformPlaceholder">{`<HnyformPlaceholder schema={schema} cols={4} color="#f57c00" bg="#fffaf0" />`}</ShowCode>
        <HnyformPlaceholder schema={schema} cols={4} color="#f57c00" bg="#fffaf0" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Underline Vertical Form</h2>
        <ShowCode title="HnyformUnderlineVertical">{`<HnyformUnderlineVertical schema={schema} cols={3} color="#ff8f00" bg="#fff3e0" />`}</ShowCode>
        <HnyformUnderlineVertical schema={schema} cols={3} color="#ff8f00" bg="#fff3e0" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Underline Horizontal Form</h2>
        <ShowCode title="HnyformUnderlineHorizontal">{`<HnyformUnderlineHorizontal schema={schema} cols={2} color="#d97706" bg="#fff7ed" />`}</ShowCode>
        <HnyformUnderlineHorizontal schema={schema} cols={2} color="#d97706" bg="#fff7ed" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Boxed Form</h2>
        <ShowCode title="HnyformBoxed">{`<HnyformBoxed schema={schema} cols={3} color="#cc6b00" bg="#fffaf3" />`}</ShowCode>
        <HnyformBoxed schema={schema} cols={3} color="#cc6b00" bg="#fffaf3" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Outlined Form (with Stepper)</h2>
        <ShowCode title="HnyformOutlined">{`<HnyformOutlined schema={schema} stepper cols={3} color="#c47f00" bg="#fff9e6" />`}</ShowCode>
        <HnyformOutlined schema={schema} stepper cols={3} color="#c47f00" bg="#fff9e6" />
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Inline Form (with Stepper)</h2>
        <ShowCode title="HnyformInline">{`<HnyformInline schema={schema} stepper cols={3} color="#e65100" bg="#fff7e6" />`}</ShowCode>
        <HnyformInline schema={schema} stepper cols={3} color="#e65100" bg="#fff7e6" />
      </section>
    </div>
  );
}

function ShowCode({ children, title }) {
  return (
    <details
      style={{
        background: "#fff6cc",
        border: "1px solid #ffd700",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "6px",
      }}
    >
      <summary style={{ cursor: "pointer", fontWeight: 600 }}>{title}</summary>
      <pre
        style={{
          marginTop: "1rem",
          background: "#fffbe6",
          padding: "1rem",
          borderRadius: "6px",
          overflowX: "auto",
        }}
      >
        <code>{children}</code>
      </pre>
    </details>
  );
}

const sectionStyle = {
  background: "#fff8dc",
  border: "2px solid #ffeb99",
  borderRadius: "10px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 10px rgba(255, 208, 0, 0.2)",
  color:"black"
};

const titleStyle = {
  color: "#ff9900",
  marginBottom: "1rem",
  borderBottom: "2px solid #ffcc00",
  paddingBottom: "0.5rem",
};

export default App;
