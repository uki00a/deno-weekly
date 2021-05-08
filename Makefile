.PHONY: generate serve clean

generate:
	deno run --allow-read=. --allow-write=./dist --allow-env cli.ts

serve:
	deno run --allow-net --allow-read https://deno.land/std@0.83.0/http/file_server.ts ./dist

clean:
	rm -rf ./dist
