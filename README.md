# Welcome to Edutopia
# A game build to support IBM Skills Build learning

# INSTALLATION

1 Download the source code from git.

2 Open up the project in VS Code (recommended) or your editor of choice - make sure you are in the root folder.  You should be able to see 'Client' and 'Server' subfolders, along with this readme.md file.  If you cannot, then you are not in the root folder.

3 Install all required packages with the following command:
```bash
npm install
```

4 Install Postgresql (see https://www.postgresql.org/).  
  During installation of Postgresql, you may be asked to provide a username for the database superuser (default: postgres), and you <u>will</u> be aksed to provide a password for this database superuser.  Keep a note of these, as they will be needed in the following steps.

5 - Navigate to the root/server folder in the edutopia project

6 - Add an environment file to this subfolder 'root/server'.  This environment file should be called ".env"

7 - Add the following to the .env file, where {Database-User} and {Database-Password} are the username and password you set during installation of Postgresql
```bash
DATABASE_URL="postgresql://{Database-User}:{Database-Password}@localhost:5432/edutopia?schema=public"
```

8 - Make sure you are in root/server, and setup Prisma with the following command
```bash
npx prisma migrate dev --name 0_init
```

9 - To start the app, make sure you are in the root folder, and use the command:
```bash
npm run dev
```

NOTES:
By default, the app will run on http://localhost:3000, unless this is already in use.

If you are using a Mac, you may need to start your Postgresql service.  It should start automatically on Windows.  And if you are using Linux, you probably don't need any instructions.
