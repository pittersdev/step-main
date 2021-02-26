# 1step

This project is based in Jekyll, so, the demo project is inside **_site** folder.

* site
  * _site

You can try a [demo](https://chiqui1234.github.io/1step/) here.

# Build

You need *Ruby* and *Ruby Gems* installed and in your OS and PATH. Then, you can execute these actions in a terminal (in this project directory):
```bash
gem install bundler jekyll
cd site
bundle exec jekyll serve # This will build the site and you can test a demo on localhost:4000
```

# Compatibility

This template is fully-compatible with older web browsers, especifically: 
* IE10 (late 2012)
* Safari 10.1 (early 2017)
* Any newer browser, except **Opera Mini** (all versions), **Samsung Internet 4** (early 2016)

However, you can get a good experience (with minor centering problems in certain elements) with:

* IE9 (early 2011)
* Chrome 56 (early 2017)
* Firefox 51 (early 2017)
* Safari 10 (late 2016)
* Opera Mini (any version)
* Samsung Internet 4 (early 2016)

### Note

SSL certificates can prevent older browsers (like IE10) when entering to your website, because IE10 supports TLS 1.0 which is a vulnerable and deprecated version (insecure) of TLS/SSL.
It's recommended a **http** (without TLS) version if you really need older browser support in Windows Vista, XP, etc.

# Adobe XD's mockups

All mockups are uploaded in this [private folder](https://drive.google.com/drive/folders/1iH6_Gt4LDHOy9Zdb0uLik74d3h7HNtLV?usp=sharing).

# New tasks 11-02-2021. Delivery scheduled on 02/20/2021

## César

* Works Single Page Type (SP, TB, PC)
* Blog Single Page Type (SP, TB, PC)
* 03-00_works (SP, TB, PC)
* 03-01_works PC – 1 (SP, TB, PC)
* CSS style for Checkbox, Radio & Select

## Mario

* Works List Type (SP, TB, PC)
* Blog List Type (SP, TB, PC)

## Santiago

* News Blog Type (SP, TB, PC)
* News Blog Single Page Type (SP, TB, PC)
* Contact Wireframe (SP, TB, PC)
* Contact Confirm Wireframe (SP, TB, PC)
* Contact Thanks Wireframe (SP, TB, PC)
* flow (SP, TB, PC)
* flow - 1 (SP, TB, PC)
* flow - 2 (SP, TB, PC)

# Dev notes
### Basically saying some elements will be finished at end of development, for optimization reasons.
* This project will get full IE11 compatibility later, because we store transitions and colors into variables which IE doesn't understand. We will hard-code all variables into plain text (old CSS3 revision) at the very end of the development.
* All CSS files will be compiled into one large and optimized file when the development are finished. Right now, we use at least 7 separated CSS files because it's human-readable :)
* All icons will be appearing when we finishes the development, because we like compress all icons into small package for data-saving. This icon selection and compression isn't a fast method, so isn't convenient doing this all the time.