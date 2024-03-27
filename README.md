<a  name="readme-top"></a>
# 3D IPFS Files & IPFS Metadata File Viewer

<!-- TABLE OF CONTENTS -->

<details>

<summary>Table of Contents</summary>

- <a  href="#getting-started">Getting Started</a>
	 - <a  href="#prerequisites">Prerequisites</a>
	 - <a  href="#environment-variables">Environment Variables</a></li>
- <a  href="#usage">Usage</a>
- <a  href="#contribution">Contribution</a></li>
-  <a  href="#License">License</a></li>

</details>
  

## :running:Getting Started

This project is meant to visualize IPFS files (3D Models and Metadata) on our prototype website. Allowing for a visually appealing way to view and interact with 3D scans. 


<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  

### :star:Prerequisites

  

Clone the repository.

  

```bash

git  clone  https://github.com/Coderrob/pinata-ipfs-scripts-for-3dscan-projects.git <insert link>

```

  

Change directory to the `sss` folder.

  

```bash

cd  ssss

```
  

Install dependencies.
bcryptjs: password function
mongodb: database
mongoose: database management
multer: API for file uploads and process file from front-end to back-end
next-auth: register and login function
sass: css styling

  

```bash

npm  i @mui/material @mui/icons-material bcryptjs mongodb mongoose multer next-auth react-icons sass @emotion/react @emotion/styled js-3d-model-viewer

```

  
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  

#### :seedling:Environment Variables

  

`PINATA_API_KEY` - The Pinata API Key environment variable

  

`PINATA_API_SECRET` - The Pinata API Secret environment variable

  

The repo is setup with [dotenv](https://github.com/motdotla/dotenv) and configured to allow using an `.env` file to run the scripts.

  

If the env file does not already exist simply create a new `.env` file at the root of the repository.

  

The contents of the `.env` file should look similar to this:

  

```ini

PINATA_API_KEY="<insert here>"

PINATA_API_SECRET="<insert here>"

```

  

To generate these Pinata API keys you'll need to follow the [Getting Started](https://docs.pinata.cloud/#your-api-keys) Pinata documentation
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  
<!-- USAGE EXAMPLES -->

## :open_file_folder:Usage

### :arrow_forward:Upload Files

  

`/src/upload-files.js`

  

The upload files script will iterate the contents of a specified folder and will upload and pin each _individual_ file to Pinata. After a successful upload the file name will be mapped to the IPFS hash CID from the response.

  

Once complete the script will output the file name and CID mappings to a file.

  

#### Settings

  

`var: pinataCIDs` - To prevent re-uploading already pinned files in Pinata. This variable is loaded with the json contents of the `./ouput/downloaded-cids.json` file if one exists. These CID mappings will help prevent re-uploading a file that has already been pinned in Pinata.

  

`var: OUTPUT_PATH` - The relative output file path. Defaulted to `./output/uploaded-cids.json`.

  

`var: FOLDER_PATH` - The relative folder path to read and upload all local files to be pinned with Pinata.

  

`env: PINATA_API_KEY` - The Pinata API Key environment value

  

`env: PINATA_API_SECRET` - The Pinata API Secret environment value

  

#### Command

  

```bash

node  ./src/upload-files.js

```

  

#### Output

  

`./output/uploaded-cids.json`

  

#### Contents

  

```json

{

"some_pic.png": "some_CID",

"some_pic2.png": "some_CID2"

}

```
<p  align="right">(<a  href="#readme-top">back to top</a>)</p>
  

### :arrow_forward:Upload Folder

  

`/src/upload-folder.js`

  

The upload folder script will iterate the contents of a specified folder and will upload and pin each file under a folder container in Pinata. After a successful upload the folder name will be mapped to the IPFS hash CID from the response.

  

Once complete the script will output the folder name and CID mapping to a file.

  

>  **Note** - To support `ipfs/<CID>/<TokenId>` such as `ipfs/QmR5m9zJDSmrLnYMawrySYu3wLgN5afo3yizevAaimjvmD/0` simply name the JSON files with numeric names and strip the file extensions. This will allow the files to be accessed by a numeric file name that can be easily mapped to the `TokenId`.

  

  

#### Settings

  

`var: OUTPUT_PATH` - The relative output file path. Defaulted to `./output/folder-cid.json`.

  

`var: FOLDER_NAME` - The folder name to use for the uploaded folder of json metadata. This can be changed to any name you'd like that identifies the collection of metadata files. Defaulted to `metadata` as the folder name.

  

`var: FOLDER_PATH` - The relative folder path to read and upload all local files to be pinned in Pinata as a folder container for the uploaded files. 

  

`env: PINATA_API_KEY` - The Pinata API Key environment value

  

`env: PINATA_API_SECRET` - The Pinata API Secret environment value

  

#### Command

  

```bash

node  ./src/upload-folder.js

```

  

#### Output

  

`./output/folder-cid.json`

  

#### Contents

  

```json

{

"some_metadata": "some_CID"

}

```

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

## :pencil2:Contribution
#### :heavy_exclamation_mark:Disclaimer:heavy_exclamation_mark:
:bell:This repo is a modified version from the **[pinata-ipfs-scripts-for-nft-projects](https://github.com/Coderrob/pinata-ipfs-scripts-for-nft-projects)**'s original repo.:bell:

 :one:. [Coderrob](https://github.com/Coderrob)
 :two:. [dependabot[bot]](https://github.com/apps/dependabot)
 :three:. [lucky7323](https://github.com/lucky7323)
 :four:. [VampishWolf](https://github.com/VampishWolf)
 :five:. [uglylieffy](https://github.com/uglylieffy)

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>