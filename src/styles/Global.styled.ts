import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --button: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    --mainText: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
    --text1: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
    --text2: linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%);
    --text3: linear-gradient(99deg, #6d7ccd 19.76%, rgba(82, 136, 133, 0.22) 52.69%);
    --text4: linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%);
    --mobileText1: linear-gradient(96deg, #fe8a8a 1.73%, #a4ceff 33.89%);
    --mobileText2: linear-gradient(277deg, #6fbaff 44.56%, #ffd88b 60.93%);
    --mobileText3: linear-gradient(99deg, #6d7ccd 53.86%, rgba(82, 136, 133, 0.22) 99.4%);
    --mobileText4: linear-gradient(271deg, #fe578f 27.48%, #68e8f9 59.2%);
    --gra-purpleblue-to-skyblue: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    --Linkbrary-gray100: #373740;
    --mainBgColor: #f0f6ff;
    --subText: #6b6b6b;
    --Grey-Light: #f5f5f5;
    --gray20: #ccd5e3;
    --Linkbrary-bg: #f0f6ff;
    --footerBgColor: #111322;
    --footerText1: #676767;
    --footerText2: #cfcfcf;
    --purpleBorder: #6d6afe;
    --Linkbrary-primary-color: #6d6afe;
    --Linkbrary-gray60: #9fa6b2;
    --Linkbrary-gray10: #e7effb;
    --Linkbrary-red: #ff5b56;
    --Stroke-light: #dee2e6;
    font-family: 'Pretendard';
    color: #000000;
  }

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: middle;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul,
li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: #000000;
}

.label--hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
}

html{
    font-size: 16px;
  }

button{
  outline: none;
  border: none;
}
`;

export default GlobalStyles;
