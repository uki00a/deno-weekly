THEME_OWNER := adityatelange
THEME_NAME := hugo-PaperMod
THEME_MAIN_BRANCH := master

theme: themes/$(THEME_NAME)

themes/$(THEME_NAME): themes/$(THEME_NAME).zip
	unzip themes/$(THEME_NAME).zip -d themes
	mv themes/$(THEME_NAME)-$(THEME_MAIN_BRANCH) themes/$(THEME_NAME)

themes/$(THEME_NAME).zip:
	curl -L https://github.com/$(THEME_OWNER)/$(THEME_NAME)/archive/refs/heads/master.zip > themes/$(THEME_NAME).zip

dev:
	HUGO_THEME=$(THEME_NAME) hugo server

build:
	HUGO_THEME=$(THEME_NAME) hugo --minify --config config.toml,production.toml

.PHONY: theme dev build
