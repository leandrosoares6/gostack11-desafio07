export default {
  title: 'light',

  colors: {
    primary: '#5636d3',
    secondary: '#ff872c',

    background: '#F0F2F5',
    text: '#969cb3',

    components: {
      file_list: {
        remove_button: {
          background: '#e83f5b',
          color: '#fff',
        },
        filename_color: '#444',
        filesize_color: '#999',
      },
      upload: {
        dropzone_color: '#969cb3',
        message: {
          default: '#5636d3',
          error: '#e83f5b',
          success: '#12a454',
        },
      },
    },

    pages: {
      dashboard: {
        title_color: '#3a3a3a',
        cards: {
          background: '#fff',
          background_total: '#FF872C',
          color: '#363F5F',
          color_total: '#fff',
        },
        dashboard_item: {
          background: '#fff',
          title_color: '#363f5f',
          income_color: '#12a454',
          outcome_color: '#e83f5b',
        },
      },

      import: {
        title_color: '#363f5f',
        file_container_background: '#fff',
        alert_color: '#969cb3',
      },
    },
  },
};
