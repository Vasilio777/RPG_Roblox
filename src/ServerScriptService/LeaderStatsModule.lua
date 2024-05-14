local LeaderStatsModule = {}

function LeaderStatsModule.Init(player_name)
	local leaderstats = Instance.new('Folder')
	local points = Instance.new('IntValue')

	leaderstats.Parent = game.ReplicatedStorage
	leaderstats.Name = player_name..'_leaderstats'

	points.Name = 'points'
	points.Parent = leaderstats
	points.Value = 0
end

function LeaderStatsModule.OnPlayerAdded(new_player)
	LeaderStatsModule.Init(new_player.Name)
end

return LeaderStatsModule