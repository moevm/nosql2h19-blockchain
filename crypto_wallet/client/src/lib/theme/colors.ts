import { BLACK, WHITE } from 'constants/styles'

const colors = {
  text: '#FFFFFF',
  bg: '#fff',
  uploadModal: {
    color: BLACK,
    bg: 'rgba(0, 0, 0, 0.5)',
    wrapper: {
      modal: {
        bg: WHITE,
        border: BLACK
      },
      helpColor: BLACK
    },
    fileList: {
      textColor: BLACK
    },
    dropzone: {
      container: {
        bg: WHITE,
        border: BLACK
      },
      containerActiveBg: '#fq329f',
      titleColor: BLACK,
      infoColor: BLACK
    }
  },
  components: {
    form: {
      bg: '#212121'
    },
    input: {
      bg: '#fff'
    },
    submitButton: {
      color: '#fff',
      background: 'transparent',
      hover: {
        color: '#000',
        bg: '#fff'
      }
    }
  },
  header: {
    background: '#eee',
    anchor: {
      color: '#000',
      background: '#fff',
      hover: {
        color: '#fff',
        bg: '#000'
      }
    }
  },
  footer: {
    color: '#e1e1e1',
    background: '#222'
  },
  // pages color
  index: {
    menu: {
      item: {
        border: '#fff'
      },
      button: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.1)',
        border: '#ddd',
        hover: {
          color: '#fe314f',
          background: '#212121'
        }
      }
    }
  },
  account: {
    background: 'rgba(255, 255, 255, 0.8)',
    exchange: {
      form: {
        background: 'transparent'
      },
      input: {
        border: '#edeff2'
      },
      button: {
        color: '#d5d5d5',
        background: '#f4f6f8'
      }
    }
  },
  transactions: {
    table: {
      bg: 'rgba(255, 255, 255, 0.7)',
      border: '#212121'
    },
    buttons: {
      color: BLACK,
      bg: WHITE,
      hover: {
        color: WHITE,
        bg: BLACK
      }
    }
  }
}

export { colors as default }
