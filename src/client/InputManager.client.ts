import { Players, RunService, UserInputService } from "@rbxts/services";
import Config from "shared/Config";

const player = Players.LocalPlayer;
if (player.Character) {
	setupChar(player.Character);
}
// const mouse = player.GetMouse();

let canDash = true;

function dash(char: Model) {
	if (!canDash) return;
	canDash = false;

	const root = char.WaitForChild("HumanoidRootPart") as Part;
	const dashDir = root.CFrame.LookVector;
	root.AssemblyLinearVelocity = dashDir.mul(Config.dash_force);

	wait(Config.dash_dur);
	root.AssemblyLinearVelocity = new Vector3(0, 0, 0);

	wait(Config.dash_cd);
	canDash = true;
}

function setupChar(char: Model) {
	const hum = char.WaitForChild("Humanoid") as Humanoid;
	hum.JumpPower = 0;

	// input
	UserInputService.InputBegan.Connect((input) => {
		if (input.UserInputType === Enum.UserInputType.Keyboard && input.KeyCode === Enum.KeyCode.Space) {
			dash(char);
		}
	});
}

// beginPlay / respawn
player.CharacterAdded.Connect((char) => {
	setupChar(char);
});

// tick
RunService.RenderStepped.Connect(() => {
	if (UserInputService.IsMouseButtonPressed(Enum.UserInputType.MouseButton2)) {
		UserInputService.MouseBehavior = Enum.MouseBehavior.Default;
	}
});
