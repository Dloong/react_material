import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import {Box} from '@material-ui/core'
import BackupIcon from '@material-ui/icons/Backup';
import UploadProcess from "./UploadProcess"
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
export interface UploadProps {
  action: string;
  beforeUpload? : (file: File) => boolean | Promise<File>;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File, value: Object) => void;
  headers?: {[key: string]: any };
  name?: string;
  data?: {[key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    beforeUpload,
    onSuccess,
    onError,
    onChange,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [imgUrl, setImgUrl] = useState<any>('')
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }



  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }

  const post = (file: File) => {
    // image review
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = ()=> {
        setImgUrl(reader.result)
    }
    // format file type to form type
    const formData = new FormData()
    formData.append(name || 'file', file)
    const fileType = (file.type.length > 6) ? file.type.substring(6, file.type.length) : file.type
    formData.append("type", fileType)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    actionApi(formData, file)
  }

  const [process, setProcess] = useState(0)
  // send file to serve
  const actionApi = (formdata: FormData, file: File) => {
    axios.post(action, formdata, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if(percentage < 100) {
            setProcess(percentage)
          }
        }
      }).then(resp => {
        setProcess(100)
        if (onSuccess) {
          onSuccess(resp.data, file)
        }
        if (onChange) {
          onChange(file, resp.data)
        }
      }).catch(err => {
        setProcess(100)
        if (onError) {
          onError(err, file)
        }
      })
  }
  const reviewImg = () => {
    if (!imgUrl.length) {
        return <BackupIcon color="primary" fontSize="large"></BackupIcon>
    } else {
        return  <img src={imgUrl} alt="" style={{width: '100%', height: '100%'}} />
    }
   }
  return (
      <Box onClick={handleClick}
            border={imgUrl? 'null':'1px dashed'}
            borderColor="text.disabled"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            width={135}
            borderRadius="borderRadius"
            height={135}>
            {reviewImg()}
        <input
          className="viking-file-input"
          style={{display: 'none'}}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
        { process>0 && process<100 && (<Box position="absolute">
                <UploadProcess value={process}></UploadProcess>
            </Box>)
        }
      </Box>
  )
}




Upload.defaultProps = {
  name: 'file'
}
export default Upload;