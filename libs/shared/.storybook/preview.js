import GlobalStyles from '!sass-loader!../../themes/global.scss';

const storybookStyles = document.createElement('style');
storybookStyles.innerHTML = GlobalStyles;
document.body.appendChild(storybookStyles);
