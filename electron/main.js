const { app, BrowserWindow } = require("electron");

var mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({ width: 1280, height: 800, resizable: false });
	mainWindow.loadFile("dist/index.html");
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});

app.on('window-all-closed', () => {
	app.quit();
});
