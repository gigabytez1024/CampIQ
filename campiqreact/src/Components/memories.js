import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import { Button, Card, CardHeader, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import "./style.css";

const Memories = () => {
  const fileParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' }
}

const onFileChange = ({ meta, file }, status) => { 
    console.log(status, meta, file) 
}

const onSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())
}

const getFilesFromEvent = e => {
    return new Promise(resolve => {
        getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject))
        })
    })
}

const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const textMsg = files.length > 0 ? 'Add photo' : 'Select file / Drag and Drop'

    return (     
      <label className="btn btn-danger mt-4">
        {textMsg}
        <input
          style={{ display: 'none' }}
          type="file"
          accept={accept}
          multiple
          onChange={e => {
            getFilesFromEvent(e).then(chosenFiles => {
              onFiles(chosenFiles);
            });
          } } />
      </label>
      
    )
}

return (
 
 
    <><Card style={{ marginTop: "10%" }}>
    <CardHeader title="Upload your memories" style={{ textAlign: "center", fontFamily: "Spicy Rice", color:"primary"}} />

    <Dropzone
      onSubmit={onSubmit}
      onChangeStatus={onFileChange}
      InputComponent={selectFileInput}
      getUploadParams={fileParams}
      getFilesFromEvent={getFilesFromEvent}
      accept="image/*,audio/*,video/*"
      maxFiles={5}
      inputContent="Drop A File"
      styles={{
        dropzone: { width: 400, height: 400 },
        dropzoneActive: { borderColor: 'secondary' },
      }} />
  </Card><p></p><Card>
      <Button variant="contained" color="secondary" align="left" component={Link} to="/addreview">
        Review a Camprgound
      </Button>
      <Button variant="contained" color="secondary" align="left" style={{ marginLeft: "25%" }} component={Link} to="/home">
        Home
      </Button>
    </Card></>
)
};

export default Memories;