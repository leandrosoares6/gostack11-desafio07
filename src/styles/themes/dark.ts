export default {
  title: 'dark',

  colors: {
    primary: '#202228',
    secondary: '#ff872c',

    background: '#1d1f24',
    text: '#fff',

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
          default: '#fff',
          error: '#e83f5b',
          success: '#12a454',
        },
      },
    },

    pages: {
      dashboard: {
        title_color: '#3a3a3a',
        cards: {
          background: '#2F323A',
          background_total: '#5636d3',
          color: '#fff',
          color_total: '#fff',
        },
        dashboard_item: {
          background: '#2F323A',
          title_color: '#ff872c',
          income_color: '#12a454',
          outcome_color: '#e83f5b',
        },
      },

      import: {
        title_color: '#fff',
        file_container_background: '#2F323A',
        alert_color: '#969cb3',
      },
    },
  },
};
