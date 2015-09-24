.PHONY: all distclean clean gh-pages latexmk-recursive distclean-recursive clean-recursive

EN_TEX_DIRECTORIES=$(sort $(dir $(wildcard English/*/*/*.tex)))
NL_TEX_DIRECTORIES=$(sort $(dir $(wildcard Dutch/*/*.tex)))
ROOT_DIR:=$(shell dirname '$(realpath $(lastword $(MAKEFILE_LIST)))')

# '-recursive' rules are based on a Makefile by Santiago Gonzalez Gancedo
# https://github.com/sangonz/latex_makefile
# which was a modified version of a Makefile by Johannes Ranke,
# which was based on Makesfiles by Tadeusz Pietraszek

all: latexmk-recursive
distclean: distclean-recursive
clean: clean-recursive

latexmk-recursive:
	@for dir in $(NL_TEX_DIRECTORIES) $(EN_TEX_DIRECTORIES); do \
		cd $$dir; \
		echo Compiling TeX in $$dir; \
		latexmk -shell-escape -quiet -g -pdf *.tex; \
		cd '$(ROOT_DIR)'; \
	done

distclean-recursive:
	@for dir in $(NL_TEX_DIRECTORIES) $(EN_TEX_DIRECTORIES); do \
		cd $$dir; \
		echo Distcleaning $$dir; \
		latexmk -quiet -C *.tex; \
		cd '$(ROOT_DIR)'; \
	done

clean-recursive:
	@for dir in $(NL_TEX_DIRECTORIES) $(EN_TEX_DIRECTORIES); do \
		cd $$dir; \
		echo Cleaning $$dir; \
		latexmk -quiet -c *.tex; \
		cd '$(ROOT_DIR)'; \
	done

gh-pages:
ifeq ($(strip $(shell git status --porcelain | wc -l)), 0)
	git checkout gh-pages
	git rm -rf .
	git clean -dxf
	git checkout HEAD .nojekyll
	git checkout master Makefile
	git checkout master Dutch English scripts styles images
	git checkout master index.html routenet.html routenet_en.html
	$(MAKE) all
	mkdir nl
	mkdir en
	mv -fv Dutch/*/*.pdf nl/
	mv -fv English/*/*/*.pdf en/
	rm -rf Dutch/ English/
	rm -f Makefile
	git add -A
	git commit -m "Generated gh-pages for `git log master -1 --pretty=short --abbrev-commit`"
	git checkout master
else
	$(error Working tree is not clean, please commit all changes.)
endif
