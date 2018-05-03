'use strict';

module.exports = {
	registerData: {
		'User1': {firstname: 'Carmem', lastname: 'Miranda', username: 'miranda@venturus.org.br', password: 'admini'},
		'User2': {firstname: 'Silvio', lastname: 'Caldas', username: 'caldas@venturus.org.br', password: 'bla123'}
	},
	loginInfo: {
		'valid user, invalid password': {username: 'admin@venturus.org.br', password: 'admini', output: 'Invalid username and/or password'},
		'invalid user, valid password': {username: 'venturus', password: 'admin', output: 'Invalid username and/or password'},
		'invalid user, invalid password': {username: 'Neymar', password: 'ney12345', output: 'Invalid username and/or password'}
	}	
}