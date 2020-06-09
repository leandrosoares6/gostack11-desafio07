import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.components.file_list.filename_color};

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  button {
    padding: 3px 16px;
    border: 0;
    border-radius: 4px;
    background: ${props =>
      props.theme.colors.components.file_list.remove_button.background};
    color: ${props =>
      props.theme.colors.components.file_list.remove_button.color};
    margin-left: 5px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 12px;
      color: ${props => props.theme.colors.components.file_list.filesize_color};
      margin-top: 5px;
    }
  }
`;
