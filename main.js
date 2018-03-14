const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
let win;
function createWindow() {
    // 创建窗口并加载页面
    win = new BrowserWindow({width: 1220, height: 680});
    win.loadURL(`file://${__dirname}/app/index.html`);
    win.setMenuBarVisibility(false);


    // 打开窗口的调试工具
    // win.webContents.openDevTools();
    // 窗口关闭的监听
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});