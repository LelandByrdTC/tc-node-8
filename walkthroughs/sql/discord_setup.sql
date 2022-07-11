-- Discord
CREATE SCHEMA IF NOT EXISTS Discord;

-- Servers
-- -- Name (text)
CREATE TABLE IF NOT EXISTS Servers (
	ServerId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Name varchar(40) NOT NULL
);

-- Roles
-- -- Name (text)
-- -- Server (id)
CREATE TABLE IF NOT EXISTS Roles (
	RoleId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Name varchar(40) NOT NULL,
    ServerId INT NOT NULL,
    CONSTRAINT fk_roles_serverid FOREIGN KEY (ServerId)
    REFERENCES Servers(ServerId)
);

-- Users
-- -- Username (text)
-- -- Description (text)
-- -- Role (id)
CREATE TABLE IF NOT EXISTS Users (
	UserId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Bio varchar(255),
    RoleId INT,
    CONSTRAINT fk_roleid FOREIGN KEY (RoleId)
    REFERENCES Roles(RoleId)
);

-- Channels
-- -- Name (text)
-- -- Server (id)
CREATE TABLE IF NOT EXISTS Channels (
	ChannelId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Name varchar(40) NOT NULL,
    ServerId INT NOT NULL,
    CONSTRAINT fk_channels_serverid FOREIGN KEY (ServerId)
    REFERENCES Servers(ServerId)
);

-- Messages
-- -- Content (text)
-- -- Author (id)
-- -- Channel (id)
CREATE TABLE IF NOT EXISTS Messages (
	MessageId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Content text NOT NULL,
    UserId INT NOT NULL,
    CONSTRAINT fk_messages_userid FOREIGN KEY (UserId)
    REFERENCES Users(UserId),
    ChannelId INT NOT NULL,
    CONSTRAINT fk_messages_channelid FOREIGN KEY (ChannelId)
    REFERENCES Channels(ChannelId)
);

