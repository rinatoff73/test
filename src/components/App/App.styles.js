import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    html: {
      width: '100%',
      height: '100%',
      fontSize: '10px'
    },
    body: {
      height: '100%',
    },
    '#root': {
      height: '100vh'
    },
    'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    }
  },
  app: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    paddingTop: '2rem',
    boxSizing: 'border-box',
    background: '#fafbfd'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '120rem'
  }
})

export default useStyles