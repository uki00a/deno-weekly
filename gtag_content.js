const Gtag = ({ id }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("script", { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${id}` }),
        React.createElement("script", { dangerouslySetInnerHTML: {
                __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');`,
            } })));
};
export default Gtag;
