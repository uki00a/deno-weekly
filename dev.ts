import Pagic from "pagic";

if (import.meta.main) {
  await new Pagic({
    watch: true,
    serve: true,
  }).build();
}
