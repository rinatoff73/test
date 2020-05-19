import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  item: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '22rem',
    height: '15rem',
    margin: '1rem',
    boxSizing: 'border-box',
    borderRadius: '1rem',
    fontSize: '1.4rem',
    background: '#fff',
    cursor: 'pointer',
    '& h6': {
      margin: '0 0 1rem 0'
    },
    '&:hover $hoverBlock': {
      display: 'flex'
    },
    '&:hover $blockBottom': {
      display: 'none'
    },
    '&:hover $checkboxBox': {
      display: 'flex'
    },
    '&:hover': {
      boxShadow: '0rem 0rem 0.7rem -0.2rem rgba(0,0,0,0.75)',
    }
  },
  blockTop: {
    padding: '1.2rem 1.2rem 0 1.2rem'
  },
  blockTopCheck: {
    display: 'flex',
    justifyContent: 'space-between',
    '& input': {
      display: 'none',
      '& + label': {
        '&:after': {
          content: 'none'
        }
      },
      '&:checked + label': {
        '&:after': {
          content: '""'
        }
      }
    },
    '& label': {
      position: 'relative',
      display: 'inline-block',
      paddingLeft: '2.2rem',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        display: 'inline-block'
      },
      '&:before': {
        height: '1.6rem',
        width: '1.6rem',
        border: '0.1rem solid #c5c7dc',
        borderRadius: '0.2rem',
        cursor: 'pointer',
        left: '0',
        top: '0'
      },
      '&:after': {
        height: '0.5rem',
        width: '0.9rem',
        borderLeft: '0.2rem solid',
        borderBottom: '0.2rem solid',
        left: '0.4rem',
        top: '0.4rem',
        transform: 'rotate(-45deg)'
      }
    }
  },
  checkboxBox: {
    display: 'none',
    alignItems: 'start'
  },
  blockBottom: {
    bottom: '0'
  },
  title: {
    width: '15rem',
    fontSize: '1.6rem'
  },
  infoCompany: {
    marginTop: '1rem',
  },
  inn: {
    fontSize: '1.2rem',
    color: '#676666'
  },
  request: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.2rem',
    width: '14rem',
    fontSize: '1.2rem',
    color: '#676666'
  },
  loading: {
    margin: '1rem 0 0 1rem',
    fontSize: '1.6rem'
  },
  tagsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '15.5rem',
    padding: '0 1.2rem',
    '& div': {
      marginBottom: '0.7rem',
      padding: '0.3rem 1rem',
      background: '#c5c7dc',
      fontSize: '1rem',
      textTransform: 'uppercase',
      borderRadius: '1rem',
      color: '#ffffff'
    },
    '& div:last-child': {
      marginBottom: '0'
    }
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.2rem 0',
    paddingLeft: '1.2rem',
    height: '4.5rem',
    background: '#eaecf5'
  },
  hoverBlock: {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    bottom: '-14.5rem',
    width: '100%',
    borderRadius: '1rem',
    boxShadow: '0rem 0.8rem 0.7rem -0.2rem rgba(0,0,0,0.75)',
    background: '#ffffff',
    zIndex: '2'
  },
  '@media (max-width: 1199px)': {
    item: {
      width: 'calc(33% - 2rem)'
    }
  },
  '@media (max-width: 768px)': {
    item: {
      width: 'calc(50% - 2rem)'
    }
  },
  '@media (max-width: 465px)': {
    item: {
      width: 'calc(100% - 2rem)'
    }
  }
}
)

export default useStyles