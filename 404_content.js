const NotFoundPage = ({ config }) => (React.createElement(React.Fragment, null,
    React.createElement("h1", null, "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"),
    React.createElement("ul", null,
        React.createElement("li", null,
            React.createElement("a", { href: `${config.root}index.html` }, "TOP\u30DA\u30FC\u30B8")),
        React.createElement("li", null,
            React.createElement("a", { href: `${config.root}tags/index.html` }, "\u30BF\u30B0\u4E00\u89A7")),
        React.createElement("li", null,
            React.createElement("a", { href: `${config.root}archives/index.html` }, "\u30A2\u30FC\u30AB\u30A4\u30D6")))));
export default NotFoundPage;
