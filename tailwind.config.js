module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'IBM Plex Sans Arabic',
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)",
            plex: [
                'IBM Plex Sans Arabic',
                'var(--font-main)',
                'sans-serif',
            ]
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill'  : 'repeat(auto-fill, 290px)',
            },
            colors             : {
                'dark'         : '#1D1F1F',
                'darker'       : '#0E0F0F',
                'danger'       : '#AE0A0A',
                'primary'         : 'var(--color-primary)',
                'primary-d'       : 'var(--color-primary-dark)',
                'primary-l'       : 'var(--color-primary-light)',
                'primary-reverse' : 'var(--color-primary-reverse)',
                'primary-dark' : 'var(--color-primary-dark)',
                /* Cats & Dogs Club design tokens */
                'brand'                : '#FF6B00', // energetic-orange
                'deep-charcoal'        : '#1A1A1A',
                'soft-cream'           : '#F5F2EA',
                'warm-ivory'           : '#FDFCF8',
                'warm-sand'            : '#D9D1C1',
                'cream-bg'             : '#fdf9f0',
                'brand-error'          : '#ba1a1a',
                'whatsapp'             : '#25D366',
                'whatsapp-dark'        : '#1DA851',
                'outline'              : '#747878',
                'on-surface-variant'   : '#444748',
                'surface-container'    : '#f2ede4',
                'surface-container-high': '#ece8df',
                'outline-variant'      : '#c4c7c7',
            },
            fontSize           : {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
                /* Display type scale */
                'headline-display': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                'headline-lg'     : ['36px', { lineHeight: '1.2', fontWeight: '800' }],
                'headline-md'     : ['28px', { lineHeight: '1.3', fontWeight: '700' }],
                'body-lg'         : ['18px', { lineHeight: '1.6' }],
                'body-md'         : ['16px', { lineHeight: '1.6' }],
                'label-sm'        : ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '500' }],
                'label-xs'        : ['12px', { lineHeight: '1.2', fontWeight: '600' }],
            },
            borderRadius       : {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                DEFAULT: '.75rem',
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
              /* Design spacing tokens */
              'margin-desktop': '64px',
              'margin-mobile' : '20px',
              'gutter'        : '24px',
            },
            lineHeight         : {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow          : {
                'default' : '5px 10px 30px #2B2D340D;',
                'top'     : '0px 0px 10px #0000001A;',
                'md'      : '5px 10px 99px #2B2D340D',
                'dropdown'      : '0 4px 8px rgba(161, 121, 121, 0.07)',
                'light'   : '0px 4px 15px rgba(1, 1, 1, 0.06)',
                'huge'    : '0px 3px 6px #00000029',
                'progress': '0 5px 15px rgba(92, 213, 196, 0.4)',
                'mobile': 'rgb(0 0 0 / 9%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 18px, rgb(0 0 0 / 9%) -15px 10px 7px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -25px 20px 20px',
            },
            width              : {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height             : {
                'banner'        : '200px',
                'lg-banner'     : '428px',
                'full-banner'   : '600px',
                '500'           : '500px',
                '460'           : '460px',
            },
            minWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'container-max': '1280px',
            },
            zIndex             : {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            screens            : {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
            backgroundOpacity  : {
                '05': '0.05',
            },
            transitionProperty : {
                'height': 'height'
            },
            keyframes: {
                slideUpFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)', opacity: '1' },
                },
                slideDownFromBottom: {
                    '0%': { transform: 'translateY(0%)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
            },
            animation: {
                slideUpFromBottom: 'slideUpFromBottom .6s linear',
                slideDownFromBottom: 'slideDownFromBottom .6s linear',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
