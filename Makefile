.PHONY: gh-pages

gh-pages:
ifeq ($(strip $(shell git status --porcelain | wc -l)), 0)
	git checkout gh-pages
	git rm -rf .
	git clean -dxf
	git checkout HEAD .nojekyll
	git checkout master Dutch English scripts styles images
	git checkout master index.html routenet.html routenet_en.html
	mkdir nl
	mkdir en
	mv -fv Dutch/*/*.pdf nl/
	mv -fv English/*/*/*.pdf en/
	rm -rf Dutch/ English/
	git add -A
	git commit -m "Generated gh-pages for `git log master -1 --pretty=short --abbrev-commit`"
	git checkout master
else
	$(error Working tree is not clean, please commit all changes.)
endif
