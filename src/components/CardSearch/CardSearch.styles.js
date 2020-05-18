import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  search: {
    display: 'flex',
    width: '100%',
    paddingLeft: '1rem',
    marginBottom: '1rem',
    boxSizing: 'border-box',
    '& img': {
      position: 'absolute',
      width: '1.6rem',
      top: '50%',
      left: '2rem',
      transform: 'translate(-50%, -50%)'
    },
    '& input': {
      height: '3.5rem',
      width: '100%',
      padding: '0 1rem 0 3rem;',
      boxSizing: 'border-box',
      borderRadius: '1rem',
      outline: 'none',
      border: '0.1rem solid #f1f1f2',
      '&::placeholder': {
        textAlign: 'center',
        fontSize: '1.2rem'
      }
    }
  },
  request: {
    position: 'relative',
    width: '14.5rem',
    marginRight: '2rem'
  },
  client: {
    position: 'relative',
    width: '19.5rem'
  },
  '@media (max-width: 768px)': {
    search: {
      flexDirection: 'column',
      padding: '0 1rem'
    },
    request: {
      marginBottom: '1.5rem',
      width: '100%'
    },
    client: {
      width: '100%'
    }
  }
})

export default useStyles