import { React } from "pagic";

export interface GtagProps {
  id: string;
}

const Gtag = ({ id }: GtagProps) => {
  // Pagic dispatches `rerender` event: https://github.com/xcatliu/pagic/blob/v1.4.0/src/plugins/script_index.js#L99
  React.useEffect(() => {
    // deno-lint-ignore no-window-prefix
    window.addEventListener("rerender", () => {
      // deno-lint-ignore no-explicit-any
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag("set", "page_path", window.location.pathname);
        gtag("event", "page_view");
      }
    });
  }, [id]);

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');`,
        }}
      />
    </>
  );
};

export default Gtag;
