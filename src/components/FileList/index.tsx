import React from 'react';

import { Container, FileInfo } from './styles';

interface FileProps {
  name: string;
  readableSize: string;
}

interface FileListProps {
  files: FileProps[];
  removeFile: Function;
}

const FileList: React.FC<FileListProps> = ({
  files,
  removeFile,
}: FileListProps) => {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.name}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
            </div>
            <button type="button" onClick={() => removeFile(uploadedFile.name)}>
              remover
            </button>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
