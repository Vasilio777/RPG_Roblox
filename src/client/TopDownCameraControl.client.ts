import { Workspace, RunService, Players } from "@rbxts/services";
import Config from "shared/Config";

const player = Players.LocalPlayer;
const camera = Workspace.CurrentCamera;

player.CharacterAdded.Connect((char) => {
	const charRoot = char.WaitForChild("HumanoidRootPart") as BasePart;

	RunService.RenderStepped.Connect(() => {
		if (camera && charRoot) {
			const charPos = charRoot.Position;
			const camPos = charPos.add(Config.cameraPos);
			camera.CFrame = new CFrame(camPos, charPos);
			camera.FieldOfView = Config.cameraFov;
		}
	});
});
