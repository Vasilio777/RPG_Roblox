--nil
--task,wait
--math.random

local function check_anchor (actor)
	if actor.Anchored == true then
		actor.Color = Color3.fromRGB(255,0,0)
		
		actor.Touched:Connect(function(TouchPart)	
			local humanoid = TouchPart.Parent:FindFirstChild('Humanoid')
			
			if humanoid then
				humanoid.Health = 0
			end
		end)	
	else
		actor.Color = Color3.fromRGB(0,255,0)
	end

end


local actors = game.Workspace.Killers

for _, actor in pairs(actors:GetChildren()) do
	actor.Anchored = true
	check_anchor(actor)

end

