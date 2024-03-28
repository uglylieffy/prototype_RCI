<a  name="readme-top"></a>
# 3D model & Json Viewer thru Pinata + MongoDB

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

- <a  href="#getting-started">Getting Started</a>
	 - <a  href="#prerequisites">Prerequisites</a>
	 - <a  href="#environment-variables">Environment Variables</a></li>
- <a  href="#usage">Usage</a>
- <a  href="#learn-more">Learn More</a>
- <a  href="#contribution">Contribution</a></li>
-  <a  href="#License">License</a></li>

</details>
  

## :running:Getting Started

  

This is a Next.js project bootstrapped with `create-next-app`. 

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  

### :star:Prerequisites

  

Clone the repository.

  

```bash

git  clone  https://github.com/uglylieffy/prototype_RCI.git

```

  

Change directory to the `prototype_RCI` folder.

  

```bash

cd  prototype_RCI

```

  

Install dependencies.

 1. bcryptjs: password function 
 2. mongodb: database 
 3. mongoose: database management 
 4. multer: API for file uploads and process file from front-end to back-end 
 5. next-auth: register and login function s
 6. ass: css styling



```bash

npm  i @mui/material @mui/icons-material bcryptjs mongodb mongoose multer next-auth react-icons sass @emotion/react @emotion/styled js-3d-model-viewer

```

  

:star:Note: This project requires basic Node.js environment.
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  

#### :seedling:Environment Variables

:mega:  The repo is setup with [dotenv](https://github.com/motdotla/dotenv) and configured to allow using an `.env` file to run the scripts. If the env file does not already exist simply create a new `.env` file at the root of the repository.

`.ENV` - The MongoDB domain, google client ID and google client secret can be found here.


  

The contents of the `.env` file should look similar to this:
```ini

MONGO_URL = "mongodb://localhost:27017"

GOOGLE_CLIENT_ID=878876049804-lchvouiudf0dn2015642dfn.apps.googleusercontent.com

GOOGLE_CLIENT_SECRET=GOCSPX-5wOn4WI_WbjdfincIShfMi1

NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=f502e0f33065482dfse343t06ac2c3536a"

```
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  
<!-- USAGE EXAMPLES -->

## :open_file_folder:Usage
### To Run the Development Server

```bash

npm run dev

```
### Then...
Open  [http://localhost:3000](http://localhost:3000/)  with your browser to see the result.
This project uses  [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)  to automatically optimize and load Inter, a custom Google Font.


## :mag:Learn More
  To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs)  - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn)  - an interactive Next.js tutorial.

You can check out  [the Next.js GitHub repository](https://github.com/vercel/next.js/)  - your feedback and contributions are welcome!

## :pencil2:Contribution

 :one:. [Uglylieffy](https://github.com/uglylieffy)
 

> Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are  **greatly appreciated**.


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1.  Fork the Project
    
2.  Create your Feature Branch (`git checkout -b feature/prototype_RCI`)
    
3.  Commit your Changes (`git commit -m 'Add some prototype_RCI'`)
    
4.  Push to the Branch (`git push origin feature/prototype_RCI`)
    
5.  Open a Pull Request
