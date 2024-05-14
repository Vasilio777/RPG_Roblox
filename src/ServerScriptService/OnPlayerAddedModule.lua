local OnPlayerAddedModule = {}

local LeaderStatsModule = require(game.ServerScriptService.LeaderStatsModule)

game.Players.PlayerAdded:Connect(function(new_player)
	LeaderStatsModule.OnPlayerAdded(new_player)
end)

return OnPlayerAddedModule
