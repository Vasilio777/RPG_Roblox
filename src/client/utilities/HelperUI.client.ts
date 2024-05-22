import { Players } from "@rbxts/services";
import Config from "shared/Config";

function createHelperScreen(propertyName: keyof typeof Config, value: number, screenPos: UDim2) {
	const screenGui = new Instance("ScreenGui");
	const frame = new Instance("Frame");

	frame.Size = new UDim2(0, 300, 0, 100);
	frame.Position = screenPos;
	frame.BackgroundTransparency = 0.5;
	frame.Parent = screenGui;

	const label = new Instance("TextLabel");
	label.Text = propertyName;
	label.Size = new UDim2(0, 280, 0, 20);
	label.Position = new UDim2(0, 10, 0, 5);
	label.Parent = frame;

	const textBox = new Instance("TextBox");
	textBox.Text = `${value}`;
	textBox.Size = new UDim2(0, 280, 0, 40);
	textBox.Position = new UDim2(0, 10, 0, 30);
	textBox.Parent = frame;

	textBox.FocusLost.Connect((enterPressed) => {
		if (enterPressed) {
			const newVal = tonumber(textBox.Text);
			if (newVal !== undefined) {
				// Config[propertyName] = newVal;
			}
		}
	});

	const player = Players.LocalPlayer;
	if (player) {
		screenGui.Parent = player.FindFirstChild("PlayerGui");
	}
}

// createHelperScreen("fov", Config.fov, new UDim2(0, 10, 0, 230));
