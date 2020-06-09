import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;

      components: {
        file_list: {
          remove_button: {
            background: string;
            color: string;
          };
          filename_color: string;
          filesize_color: string;
        };
        upload: {
          dropzone_color: string;
          message: {
            default: string;
            error: string;
            success: string;
          };
        };
      };

      pages: {
        dashboard: {
          title_color: string;
          cards: {
            background: string;
            background_total: string;
            color: string;
            color_total: string;
          };
          dashboard_item: {
            background: string;
            title_color: string;
            income_color: string;
            outcome_color: string;
          };
        };

        import: {
          title_color: string;
          file_container_background: string;
          alert_color: string;
        };
      };
    };
  }
}
