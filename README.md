# Welcome to Edutopia
# A game build to support IBM Skills Build learning

# REQUIREMENTS
Node.js and postgresql need to be installed.
Need either npm or yarn.


# INSTALLATION

1 Download the source code from git.

2 Open up the project in VS Code (recommended) or your editor of choice - make sure you are in the root folder.  You should be able to see 'Client' and 'Server' subfolders, along with this readme.md file.  If you cannot, then you are not in the root folder.

3 Install all required packages with the following command:
```bash
npm install
```

4 Install Postgresql (see https://www.postgresql.org/).  
  During installation of Postgresql, you may be asked to provide a username for the database superuser (default: postgres), and you <u>will</u> be aksed to provide a password for this database superuser.  Keep a note of these, as they will be needed in the following steps.
  Also, during installation, you may be asked what port you want to run Postgres on (default: 5432).  If you change this, then take note of the port number you are using.

5 - Navigate to the root/server folder in the edutopia project

6 - Add an environment file to this subfolder 'root/server'.  This environment file should be called ".env"

7 - Add the following to the .env file, where {Database-User} and {Database-Password} are the username and password you set during installation of Postgresql (and if you changed the port, you need to replace '5432' with the port you chose).  By default, express.js will run on port 3001, but if you want it to run on a different port, then change the PORT variable below.
```bash
DATABASE_URL="postgresql://{Database-User}:{Database-Password}@localhost:5432/edutopia?schema=public"
PORT=3001
```

8 - While you are still in root/server, enter the following commands to setup Prisma
```bash
npx prisma migrate dev --name 0_init
npx prisma migrate reset
```

9 - Navigate to the root/client folder and create another environment file called ".env".

10 - In this file, you will need to add the following.  If you are not using PORT=3001, then change the number after localhost: to the port number you are using.
```bash
REACT_APP_API_BASE_URL=http://localhost:3001
```

11 - To start the app, make sure you are in the root folder, and use the command:
```bash
npm run dev
```

NOTES:
By default, the app will run on http://localhost:3000, unless this is already in use.
Express JS will want to run on port 3001, unless told otherwise.
And by default, Postgresql runs on port 5432.

If you are using a Mac, you may need to start your Postgresql service.  It should start automatically on Windows.  And if you are using Linux, you probably don't need any instructions.
