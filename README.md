## Task Manager API built with Express and MongoDB

#### Creating new user:
Request body JSON required params: name, email and password
After registering and deleting user an welcome/ farewell message will be sent to the provided email using SendGrid

#### Creating new task:
Request body JSON required params: description, completed(boolean)

<br />

##### POST Create User: ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)

  sw-task-manager.herokuapp.com/users
<br />

##### POST Add User Avatar: ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)

  sw-task-manager.herokuapp.com/users/me/avatar
<br />

##### POST Login: ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)

  sw-task-manager.herokuapp.com/users/login
<br />

##### POST Logout: ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)

  sw-task-manager.herokuapp.com/users/logout
<br />

##### POST Logout From All Sessions: ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)

  sw-task-manager.herokuapp.com/users/logoutAll
<br />

##### POST Create Task: ![#ffff00](https://via.placeholder.com/15/ffff00/000000?text=+)

  sw-task-manager.herokuapp.com/tasks
<br />

##### GET Get Profile: ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)

  sw-task-manager.herokuapp.com/users/me
<br />

##### GET Get User Tasks: ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+)

  sw-task-manager.herokuapp.com/tasks
  ?
  sortBy={fieldName} + :{asc/desc},
  completed,
  limit,
  skip
<br />

##### PATCH Update User Credentials: ![#808080](https://via.placeholder.com/15/808080/000000?text=+)

  sw-task-manager.herokuapp.com/users/me
<br />

##### PATCH Update Task: ![#808080](https://via.placeholder.com/15/808080/000000?text=+)

  sw-task-manager.herokuapp.com/tasks/{task_id}
<br />

##### DELETE Delete User: ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+)

  sw-task-manager.herokuapp.com/users/me
<br />

##### DELETE Delete Task: ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+)

  sw-task-manager.herokuapp.com/tasks/{task_id}
