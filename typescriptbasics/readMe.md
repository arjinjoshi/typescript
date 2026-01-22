the first thing in any project to init the git first so we'll use the command `git init` and also create `.gitignore file ` and make sure to add ` node_modules/ ` and ` dist/ ` under it 

After that to create a ts running file. Here are some steps:

Step 1: `npm init -y` =>  `npm init` commands helps to define package.json and since we've used `-y` so we'll get package.json with default configuration


Step 2: `npm install typescript --save-dev`   => This command will install typescript as the development dependency in our project 
we'll get the node_modules as well as the package-lock.json 

Step 3: `tsc --init` => it will helps to define tsconfig.json where we'll set all the rules related to the typescript files 

Step 4: Configure the ts.config file
 Configure tsconfig.json and make sure to add or change highlighted part 

{
      "compilerOptions": {
     `   "rootDir": "src",` 
       ` "outDir": "dist",`
       ` "target": "ES2019",`
       ` "module": "CommonJS",`
       ` "strict": true, `
       ` "noEmitOnError": true ` // if we add this then   `if there is any error in ts file , it won't compile the ts file and generate corresponding js file` and if we want it's default behaviour like `to compile and generate the corresponding ".js" file even if there is error in ".ts" file then we don't have to add this one or even if we add this.. then we must make sure that it is "false"`
    },
   ` "include": ["src/**/*"]`
}

#rootDir: The main folder where your TypeScript source files are located (here, src).
#outDir: The folder where the compiled JavaScript files will be placed (here, dist).
#target: The version of JavaScript to compile to (here, ES2019).
#module: The module system to use in the output files (here, CommonJS, which is used by Node.js).
#strict: Enables strict type-checking options for safer code.

Step 5: Update package.json to add script to build and watch build.
"scripts": {
   ` "build": "tsc",`
   ` "dev": "tsc --watch",`
  },

  Now `to compile tsc file` we can use either `tsc` or `npm run build`

  and `to watch live file changes` : we can either use `tsc --watch` or `npm run dev` and to quit from that infinitely running command press    ` ctrl + c `


Step 6: Create `src` folder and inside it create `.ts` file

Step 7: Run with type error and see the result... 
  if we run command `tsc or npm run build` it will show error but still compile that .ts file and generate the corresponding .js file `if and only if "noEmitOnError": false` but if we have set the value of ` "noEmitOnError": true` then     `if our .ts file contain any type error or others then it won't compile .ts file and generate corresponding .js file until and unless that error get solved ` so if we set it to true it will help us to do strict typechecking 

Step 8: OPTIONAL -> If we want to see the `live changes to corresponding .js file when you update .ts file` without manually running the command  `tsc or npm run build ` we can achieve that by running the command 
    ` tsc --watch or npm run dev`
    
Step 9: Run the file that you want by using command 
    `node dist/filename.js` // here filename.js is the corresponding filename.js created from corresponding filename.js which lies inside .src folder

Step 10: Repeat the process using same for to create new .ts file under src folder
    `tsc or npm run build ` => it will generate corresponding .js file by compiling it 
    then to run `node dist/filename.js` to run corresponding file


Last Thing : Always make sure to go on any .ts file then press `cmd+shift+p` then search for `TypeScript: Select TypeScript Version ` and click on it and make sure to select  `your workspace `


`Our browser doesn't understand typescript, eventually our every typescript files compiles down to javascript file . There are many compilers but here we are using official tsc compiler which compiles every ts files & generates js files accordingly and eventually we run those js files to see the final result `

