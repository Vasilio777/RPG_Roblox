

local actors = workspace.PointGivers

for _, actor in pairs(actors:GetChildren()) do
	if actor:isA('Part') then
		
		actor.Touched:Connect(function(part)
			local player = game.Players:GetPlayerFromCharacter(part.Parent) 
			if player then
				local leaderstats = game.ReplicatedStorage:FindFirstChild(player.Name..'_leaderstats')
				if leaderstats then
					local points = leaderstats:FindFirstChild('points')
					if points then
						points.Value = points.Value + 1
					end
				end
			end
		end)
		
	end
end