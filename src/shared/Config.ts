interface Config {
	CameraPos: Vector3;
	CameraFov: number;
}

const Config: Config = {
	CameraPos: new Vector3(-10, 25, -10),
	CameraFov: 50,
};

export = Config;
