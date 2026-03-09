// 1. Define la cadena de texto con todo el CSS
const customCSS = `

.site-header .games {
    background-color: transparent !important;
}

.site-header {
    background: #272727;
}

.header-userpanel .header-icon {
    color: #ffffff;
    fill: #ffffff;
}

.header-menubar li a {
    color: #ffffff;
}

.site-header #games_button {
    color: #ffffff !important; /* Prueba con este selector más específico */
}

.calendar {
    color: #ff640a;
}

.simulcast-calendar {
    color: #ffffff;
}

body.main-page {
    background-color: #000000;
}


.simulcast-lineup-toggle .mode-button {
    display: table-cell;
    vertical-align: middle;
    width: 50%;
    border-right: 1px solid #fff;
    padding: .525em 2.5em .275em 1.5em;
    text-align: center;
    text-transform: uppercase;
    background: #fff;
    color: #ff640a;
    font-size: .6875rem;
    line-height: 1;
    font-weight: 400;
}

.simulcast-lineup-toggle .mode-button svg {
    fill: #ff640a;
}

.simulcast-lineup-toggle .mode-button.active, .simulcast-lineup-toggle .mode-button:hover {
    background: #ff640a;
    color: #fff;
    text-shadow: 0 0 .0em #00000000;
}

.calendar h1>a {
    color: #ffffff;
}

.day.active .calendar-day {
    background: #ff640a;
    border-radius: 1.5rem;
    box-shadow: 0 .0625rem .0625rem 0 rgba(54, 50, 49, .25);
}

#footer .footer-column a, #footer .footer-column span.text {
    color: #ffffff;
}

#footer .footer-column h6 {
    color: #ff640a;
}

#footer_menu {
    background-color: #000000;
}

.simulcast-lineup-toggle .mode-button {
    background: #ffffff;
    color: #ff640a;
}

.calendar-day .day-switcher {
    color: #ffffff;
}

.day-date .specific-date {
    color: #ffffff;
}

.availability .available-episode-link {
    color: #ffffff;
}

#footer .footer-language .selected {
    color: #9f9f9f;
}

.calendar a:hover {
    color: #9f9f9f;
}

.calendar-day .day-switcher:hover {
    color: #9f9f9f;
}

.site-header .games:hover {
    background-color: #ffffff00 !important;
}

.calendar .day.active .calendar-day {
    color: white;
}

.responsive-grid #footer_menu, .responsive-grid #template_container, .responsive-grid .site-header>.content {
    max-width: 100rem;
}

#footer_menu {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

.footer-column {
    /* La propiedad float debe ser removida para que flexbox funcione correctamente */
    padding: 2%;
    width: 16%; 
    /* Si quieres centrar el texto dentro de la columna, añade: */
    /* text-align: center; */
}

.header-userpanel .header-icon:hover, .header-userpanel .userpanel-item.state-selected .header-icon {
    color: #ff640a;
    fill: #ff640a;
}

@media screen and (min-width: 50rem) {
    .header-menubar li a:hover {
        color: #ff640a;
    }
}

.calendar .pagination-arrow svg {
    fill: #ff640a;
}

.calendar .pagination-arrow:hover {
    background-color: #ff640a;
}

a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, iframe, img, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    font-family: Lato, Helvetica Neue, helvetica, sans-serif;
}


#footer .footer-column a:hover {
    color: #9f9f9f !important;
}


.day.active .calendar-day a:hover {
    color: #000000;
}

`;

// 2. Crea el elemento <style>
const styleElement = document.createElement('style');

// 3. Inserta el CSS en el elemento
styleElement.textContent = customCSS;

// 4. Añade el elemento <style> al <head> o <body> del documento
document.head.appendChild(styleElement);