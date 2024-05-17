local placefile_name = "project.rbxl"

local fs = require("@lune/fs")
local roblox = require("@lune/roblox")

local file = fs.readFile(placefile_name)
local game = roblox.deserializePlace(file)
local workspace = game:GetService("Workspace")

-- Workspace
for _, descendant in workspace:GetDescendants() do
	if descendant:IsA("BasePart") then
		descendant.Anchored = true
	end
end

-- save the project file back
file = roblox.serializePlace(game)
fs.writeFile(placefile_name, file)
