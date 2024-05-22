interface Config {
	cameraPos: Vector3;
	cameraFov: number;

	dash_force: number;
	dash_dur: number;
	dash_cd: number;
}

const Config: Config = {
	cameraPos: new Vector3(-10, 25, -10),
	cameraFov: 50,

	dash_force: 150,
	dash_dur: 1.6,
	dash_cd: 2,
};

export = Config;
