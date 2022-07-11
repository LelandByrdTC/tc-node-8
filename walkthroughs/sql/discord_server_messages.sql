USE Discord;

-- Server 1, Channel x
-- Server Name, Message Content, Message Author, Channel Name
SELECT s.Name AS Server, c.Name AS Channel, m.Content, u.Username
FROM servers AS s
INNER JOIN channels AS c
ON c.ServerId = s.ServerId
INNER JOIN messages AS m
ON c.ChannelId = m.ChannelId
INNER JOIN users AS u
ON u.UserId = m.UserId
WHERE s.ServerId = 1 AND c.ChannelID = 4;

SELECT * FROM channels
INNER JOIN servers
ON servers.ServerID = channels.ServerId;
