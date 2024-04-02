import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  showDialog: (options) => ipcRenderer.send('show-dialog', options),
  createWindow: () => ipcRenderer.send('create-window'),
  cargarTc: (options) => ipcRenderer.invoke('obtener-informacion', options),
  minimize: (options) => ipcRenderer.send('minimize', options),
  close: (options) => ipcRenderer.send('close', options),
  maximize: (options) => ipcRenderer.send('maximize', options)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
