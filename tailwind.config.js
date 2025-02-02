module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      roboto: ['"Roboto", sans-serif'],
      kidgames: ['kidgames'],
      gameria: ['gameria'],
    },
    extend: {
      fontSize: {
        '10': '10px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '33': '33px',
        '34': '34px',
        '36': '36px',
        '38': '38px',
        '40': '40px',
        '48': '48px',
        '61': '61px',
      },
      colors: {
        gray: {
          '8b8b8b': '#8b8b8b',
          'ffde00': '#ffde00',
          '5f1a3d': '#5f1a3d',
          '500f1d': '#500f1d',
          '7b2537': '#7b2537',
          '7c2538': '#7c2538',
          '50191e': '#50191e',
          '320609': '#320609',
          '310509': '#310509',
          '662b0a': '#662b0a',
          '662b0a-60': 'rgba(102, 43, 10, 0.6)',
          'f3b97f': '#f3b97f',
          'fbaa7f': '#fbaa7f',
          'fbaa7f-60': 'rgba(251, 170, 127, 0.6)',
        },
      },
      width: {
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '35/100': '35%',
        'fit': 'fit-content',
      },
      height: {
        '65px': '65px',
        '315': '315px',
        '350': '400px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
      maxWidth: {
        '473': '473px',
        '560': '560px',
        '1160': '1160px',
      },
      maxHeight: {},
      minWidth: {},
      minHeight: {},
      spacing: {},
      margin: {},
      padding: {
        '65': '65px',
        '18': '4.5rem',
        '3/100': '3%',
      },
      inset: {
        '0.75': '3px',
        '-18': '-4.5rem',
      },
      letterSpacing: {},
      zIndex: {
        '1': '1',
        '100': '100',
        '900': '900',
        '1000': '1000',
        '9999': '9999',
      },
      borderRadius: {
        '5': '5px',
        '8': '8px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}